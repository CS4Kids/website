<template>
  <ParentLayout>
    <template #page></template>
    <template #page-bottom>
      <div class="page-bar">&copy; Jen Looper 2022</div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
export default {
  components: {
    ParentLayout,
  },
}
</script>


