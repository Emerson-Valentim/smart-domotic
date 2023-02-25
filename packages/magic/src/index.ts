import { Queue } from "queue";
import { rest } from "rest-server";

const methods = Queue({
  dbUrl: process.env.DB_URL,
});

rest({
  port: process.env.PORT,
  routes: [
    {
      path: "/microwave",
      handlers: [
        {
          verb: "get",
          callback: async (ctx) => {
            ctx.response.body = await methods.state();
            ctx.response.status = 200;
          },
        },
        {
          verb: "get",
          subpath: "/consume",
          callback: async (ctx) => {
            try {
              ctx.response.body = await methods.consume();
              ctx.response.status = 200;
            } catch (e) {
              const isError = e instanceof Error;

              if (isError) {
                ctx.response.status =
                  {
                    NOT_FOUND: 404,
                    BAD_REQUEST: 400,
                  }[e.message] ?? 500;
              }
            }
          },
        },
        {
          verb: "post",
          callback: async (ctx) => {
            ctx.response.body = await methods.add(ctx.request.body);
            ctx.response.status = 200;
          },
        },
        {
          verb: "delete",
          callback: async (ctx) => {
            try {
              ctx.response.body = await methods.finish();
              ctx.response.status = 200;
            } catch (e) {
              const isError = e instanceof Error;

              if (isError) {
                ctx.response.status =
                  {
                    NOT_FOUND: 404,
                    BAD_REQUEST: 400,
                  }[e.message] ?? 500;
              }
            }
          },
        },
      ],
    },
  ],
});