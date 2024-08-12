<script setup lang="ts">
import { Movie } from '@/entities/movie/model';

type PropsType = {
    movie: Movie
}

defineProps<PropsType>();

</script>
<template>
  <el-card shadow="hover">
    <template #header>
      {{ movie.title }}
    </template>
    <el-image :src="movie.poster" />
    <template #footer>
      {{ movie.type }}
    </template>
  </el-card>
</template>

<style scoped>
    .el-image {
        width: 100%;
        aspect-ratio: 0.75;
    }
    .el-card {
        height: 100%;
    }
</style>
