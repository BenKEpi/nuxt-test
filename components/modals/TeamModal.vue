<template>
  <TransitionRoot appear :show="props.show" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-30">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="flex w-full items-center justify-between text-xl font-medium leading-6 text-gray-900"
              >
                My Team
                <div>
                  <button
                    @click="closeModal"
                    class="rounded-full bg-gray-500/30 p-0.5 shadow shadow-gray-500/50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 fill-slate-400 stroke-black stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </DialogTitle>
              <div class="mt-6 space-y-4">
                <div v-for="(pokemon, index) in teamStore.team">
                  <div
                    class="flex items-center justify-between rounded-md border bg-slate-50 px-3 py-2 shadow"
                  >
                    <div class="mr-4 flex items-center space-x-2">
                      <img
                        :src="pokemon.sprites.front_default"
                        class="h-12 w-12"
                      />
                      <p class="text-lg font-medium text-slate-800">
                        {{ pokemon.name }}
                      </p>
                    </div>
                    <button @click="teamStore.deletePokemon(index)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 fill-red-600 stroke-white stroke-2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div> -->
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogTitle,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

import { useTeamStore } from "~/store/team";

type Props = {
  show: boolean;
  // setIsOpen: Function;
};

const modal = useModal();

const props = defineProps<Props>();
const teamStore = useTeamStore();

const closeModal = (): void => {
  modal.value = false;
  //props.setIsOpen(false);
};
</script>
