import * as yup from "yup";

export const searchSchema = yup.object({
  search: yup
    .string()
    .required("Запрос не может быть пустым")
    .min(2, "Минимум 2 символа требуется для поиска"),
});
