<script setup lang="ts">
import {SearchForm} from '../../../widgets/search-form'
import {ref} from 'vue';
import { Movie } from '../../../widgets/search-form/ui/search-form.vue';

function searchHandler(data?: Movie[]): void {
    if (data) {
        searchResult.value = data;
    }
}

const searchResult = ref<Movie[]>([])
</script>
<template>
    <el-row class="search-form">
        <el-col>
            <search-form @search="searchHandler"/>
        </el-col>
    </el-row>


    <div>
        <h1>Результаты поиска</h1>
        <el-row :gutter="20">
            <el-col v-for="movie in searchResult" :xs="2" :sm="4" :md="4" :lg="6" :xl="6">
                <el-card shadow="hover">
                    <template #header>{{ movie.Title }}</template>
                        <el-image
                            :src="movie.Poster"
                        />
                    <template #footer>{{ movie.Type }}</template>
                </el-card>
            </el-col>
        </el-row>
    </div>

</template>

<style scoped>
    .search-form {
        width: 600px;
    }
    .el-col {
        margin: 0 0 20px;
    }
    .el-image {
        width: 100%;
        aspect-ratio: 0.75;
    }
    .el-card {
        height: 100%;
    }
</style>
