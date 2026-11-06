import { computed, inject } from "vue";
import { useRoute } from "vue-router";

export function useCurrentProject() {
  const route = useRoute();
  const projects = inject("projects");
  return computed(() => projects.value.find((p) => p.id === Number(route.params.id)));
}
