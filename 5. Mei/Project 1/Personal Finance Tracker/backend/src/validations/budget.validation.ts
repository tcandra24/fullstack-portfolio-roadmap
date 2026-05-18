import * as yup from "yup";

export const createBudgetSchema = yup.object({
  body: yup.object({
    amount: yup.number().min(0).required(),
    month: yup.number().min(1).max(12).required(),
    year: yup.number().min(2000).required(),
  }),
});

export const updateBudgetSchema = yup.object({
  body: yup.object({
    amount: yup.number().min(0).required(),
    month: yup.number().min(1).max(12).required(),
    year: yup.number().min(2000).required(),
  }),
  params: yup.object({
    id: yup.number().integer().positive().required(),
  }),
});
