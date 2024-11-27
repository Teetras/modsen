import * as yup from "yup";

export const searchSchema = yup.object({
  search: yup
    .string()
    .required("Запрос не может быть пустым")
    .min(3, "Минимум 3 символа требуется для поиска"),
});