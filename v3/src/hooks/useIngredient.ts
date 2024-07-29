import {useMutation, useQueryClient} from "react-query";
import {useCallback} from "react";
import {createIngredient} from "../actions/ingredientActions";

export const useCreateIngredient = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createIngredient,
        onSuccess: useCallback(
            (res: any) => {
                console.log(res)
            },
            [queryClient]
        ),
        onError: (err) => {
            console.warn(err)
        }
    })
}