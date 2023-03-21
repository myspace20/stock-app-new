import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLSchema, GraphQLBoolean, GraphQLArgumentConfig, GraphQLArgs, GraphQLTypeResolver, GraphQLScalarType, GraphQLInputType, GraphQLInputObjectType } from 'graphql'


export const fileRenamer = (filename: string): string =>
{
    const queHoraEs = Date.now();
    const regex = /[\s_-]/gi;
    const fileTemp = filename.replace(regex, ".");
    let arrTemp = [fileTemp.split(".")];
    return `${arrTemp[0]
        .slice(0, arrTemp[0].length - 1)
        .join("_")}${queHoraEs}.${arrTemp[0].pop()}`;
};


export const UploadType = new GraphQLScalarType({
    name: 'Uploads',
    serialize: (file: any) => file,
    parseValue: (file: any) => file,
    parseLiteral(file) {
        return file;
    }
})

export const FileUploadResponseType = new GraphQLObjectType({
    name: "FileUploadResponse",
    fields: () => {
        return ({
            success: { type: GraphQLBoolean },
            message: { type: GraphQLString },
            errorStatus: { type: GraphQLBoolean },
            error: { type: GraphQLString },
            token: { type: GraphQLString },
        });
    },
})

