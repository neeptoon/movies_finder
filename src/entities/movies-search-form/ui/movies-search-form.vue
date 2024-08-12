<script setup lang="ts">
import type { FormInstance } from 'element-plus/es/components/form';
import { Search } from '@element-plus/icons-vue';
import {MOVIE_TYPE, Movie, getMoviesList} from '@/entities/movie';
import { MoviesSearchFormValues } from '@/entities/movies-search-form/model';
import {useMoviesSearchForm} from '@/entities/movies-search-form/lib';

const {
  formRef,
  formValue,
  isAdvancedSearch,
  clearFormValue,
  searchResult,
  handleClear,
  rules,
} = useMoviesSearchForm();

type Emits = {
  (e: 'search', value?: Movie[]): void;
};
const emits = defineEmits<Emits>();


const getMovies = async ({title, type}: MoviesSearchFormValues): Promise<void> =>
  {
    const movieType = type === MOVIE_TYPE.ALL ? undefined : type;
    if (title) {
      searchResult.value = await getMoviesList(title, movieType);
      clearFormValue();
      emits('search', searchResult.value);

    }
};

const submitForm = async (formEl: FormInstance | undefined): Promise<void> => {
  if (!formEl) {return;}
  await formEl.validate((valid, fields) => {
    if (valid) {
      getMovies(formValue.value);
    } else {
      console.log('error submit!', fields);
    }
  });
};


</script>
<template>
  <el-form
    ref="formRef"
    :rules="rules"
    :model="formValue"
    @submit.prevent="submitForm(formRef)"
  >
    <el-form-item
      label="Введите название фильма"
      prop="title"
    >
      <el-input
        v-model="formValue.title"
        :suffix-icon="Search"
      />
    </el-form-item>

    <el-form-item label="Расширеный поиск">
      <el-checkbox v-model="isAdvancedSearch" />
    </el-form-item>

    <el-form-item
      v-if="isAdvancedSearch"
      prop="type"
    >
      <el-radio-group v-model="formValue.type">
        <el-radio value="all">
          Все категории
        </el-radio>
        <el-radio value="movie">
          Фильм
        </el-radio>
        <el-radio value="series">
          Сериал
        </el-radio>
        <el-radio value="game">
          Игра
        </el-radio>
      </el-radio-group>
    </el-form-item>

    <el-button
      native-type="submit"
      type="primary"
    >
      Найти
    </el-button>
    <el-button
      type="primary"
      @click="handleClear"
    >
      Очистить параметры поиска
    </el-button>
  </el-form>
</template>

<style>
</style>
