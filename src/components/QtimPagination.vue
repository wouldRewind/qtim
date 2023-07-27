<script setup lang="ts">
interface IProps {
    current: number
    max: number
}

const props = defineProps<IProps>()
const emits = defineEmits(['update:modelValue'])

const handleUpdateModelValue = (val: number) => {
  emits('update:modelValue', val)
}

</script>

<template>
        <q-pagination
          :model-value="current"
          @update:model-value="handleUpdateModelValue"
          :max="props.max"
          direction-links
          boundary-links
        />
</template>
