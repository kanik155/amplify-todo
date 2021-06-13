import { configure } from "@/my-aws-exports"
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { API, graphQLOperation } from "aws-amplify"
import Observable from "zen-observable-ts"

configure()

export const query = async <T, V = undefined>
(query: string, variables?: V) => {
    return (await API.graphql(
        graphQLOperation(query, variables)
    )) as GraphQLResult<T>
}

export const mutate = async <T, V = undefined>(mutation: string, variables?: V) => {
    return (await API.graphql(
        graphQLOperation(mutation, variables)
    )) as GraphQLResult<T>
}

export const subscription = <T extends object, V = undefined>(
    subscription: string,
    variables?: V
) => {
    return API.graphql(graphQLOperation(subscription, variables)) as Observable<{
        value: {data: T}
    }>
}