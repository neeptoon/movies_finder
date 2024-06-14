<script setup lang="ts">
import { type Movie, MovieCard } from '@/entities/movie';
import {MoviesSearchForm} from '@/entities/movies-search-form';
import { isEmpty } from 'element-plus/es/utils/index.mjs';
import {computed, ref} from 'vue';

const searchResult = ref<Movie[]>([])

const showSearchResult = computed<boolean>(() => !isEmpty(searchResult.value))

function searchHandler(data?: Movie[]): void {
    if (data) {
        searchResult.value = data;
    }
}

function handleClear() {
    searchResult.value = []
}


</script>
<template>
    <el-row justify="center" gutter="5">
        <el-col>
            <h1>Поиск фильмов по названию</h1>
        </el-col>
        <el-col>
            <movies-search-form @search="searchHandler"/>
        </el-col>
    </el-row>

    <el-row v-if="showSearchResult" gutter="15">
        <el-col>
            <h1>Результаты поиска</h1>
        </el-col>
        <el-col v-for="movie in searchResult" :xs="2" :sm="4" :md="4" :lg="6" :xl="6">
            <movie-card :movie="movie"/>
        </el-col>
        <el-col>
            <el-button type="primary" @click="handleClear">Очистить результаты поиска</el-button>
        </el-col>
    </el-row>

</template>

<style scoped>
    .el-col {
        margin-bottom: 20px;
    }

</style>
