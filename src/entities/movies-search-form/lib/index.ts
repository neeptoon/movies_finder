import { FormInstance, FormRules } from "element-plus";
import { MoviesSearchFormValues } from "@/entities/movies-search-form/model";
import { reactive, ref } from "vue";
import { Movie } from "@/entities/movie/model";

export function useMoviesSearchForm(): Record<string, string> {
  const formRef = ref<FormInstance>();
  const formValue = ref<MoviesSearchFormValues>({});
  const isAdvancedSearch = ref<boolean>(false);

  const searchResult = ref<Movie[]>();

  const clearFormValue = (): void => {
    formValue.value = {};
  };

  const handleClear = (): void => clearFormValue();

  const rules = reactive<FormRules<string>>({
    title: [
      { required: true, message: 'Введите название фильма (на латинском языке)', trigger: 'blur' },
    ],
    type: [
      { required: true, message: 'Выберете хотя бы одно значение', trigger: 'blur' }
    ]
  });

  return {
    formRef,
    formValue,
    isAdvancedSearch,
    searchResult,
    clearFormValue,
    handleClear,
    rules,
  };
}
