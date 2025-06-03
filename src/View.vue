<script setup lang="tsx">
import { ref } from 'vue'

const props = defineProps<{ msg: string }>()

defineRender(() => {
  return <div class="view">Should have blue background</div>
})
</script>

<style scoped>
.view {
  background-color: blue;
}
</style>
