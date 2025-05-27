//documentation

const pathToRoutesFile=new URL('../routers/v1/*.js', import.meta.url).pathname;
console.log(pathToRoutesFile)
export const operations={
    definition:{
        openapi:'3.0.0',
        info:{
            title:"imagegram API",
            version:"0.1.0",
            description:"a simple CRUD api made with express and documented with Swagger"
        },
        servers:[{
            url:"http://localhost:3000"
        },
      ],
    },
    apis: [pathToRoutesFile],

};