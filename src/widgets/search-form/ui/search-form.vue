<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus/es/components/form';
import { Search } from '@element-plus/icons-vue';
import { OMDBAgent } from '@/shared/api';

export type Fields = {
  title?: string,
}

const formValue=ref<Fields>({});

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<string>>({
  title: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 50, message: 'Length should be 1 to 50', trigger: 'blur' },
  ],
})

const searchResult= ref<Movie[]>()

const agent = new OMDBAgent();

export type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}

type Emits = {
  (e: 'search', value?: Movie[]): void;
};

const emits = defineEmits<Emits>();

onMounted(() => {
  agent.getMovies('terminator');
  agent.getFullMovieInfo('tt0364056')
})

const fetcher = async ({title}: Fields): Promise<void> =>
  {
    if (title) {
      const moviesList = await agent.getMovies(title);
      searchResult.value = (await agent.getMovies(title)).data.Search;
      console.log(moviesList, 'moviesList');
      emits('search', searchResult.value)
    }
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (formValue.value) fetcher(formValue.value);

    } else {
      console.log('error submit!', fields)
    }
  })
}


</script>
<template>
    <el-form
        ref="formRef"
        :rules="rules"
        :model="formValue"
        @submit.prevent="submitForm(formRef)"
    >
        <el-form-item label="Введите название фильма" prop="title">
            <el-input v-model="formValue.title" :suffix-icon="Search"/>
        </el-form-item>
        <el-button native-type="submit" type="primary">Найти</el-button>
    </el-form>
</template>

<style>
</style>
