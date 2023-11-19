import { query } from "@/services/generator";

export async function generator(data) {
  const repeat = [data ,data ,data ,data ,data ,data ,data ,data ,data ,data ]
  const promises = repeat.map(async (input) => {
    return query({ inputs: input });
  });

  const results = await Promise.all(promises);
  return results;
}
