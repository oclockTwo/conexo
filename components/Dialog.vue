<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      as="div"
      @click="$emit('closeModal')"
      :open="isOpen"
      class="relative z-10"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
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
                class="text-lg text-center font-medium leading-6 text-gray-900"
              >
                Como jogar
              </DialogTitle>
              <div class="mt-2">
                <p class="text-md text-base font-semibold text-gray-500">
                  Forme grupos de 4 palavras que tenham algo em comum. <br />
                  <br />
                  Clique em uma palavra para selecioná-la. Se precisar, você
                  pode clicar novamente para desselecionar. <br />
                  <br />
                  Assim que você selecionar 4 palavras o jogo irá
                  automaticamente conferir se o grupo está correto. <br />
                  <br />
                  Se estiver correto, a categoria será revelada. Senão, tente
                  novamente. <br />
                  <br />
                  Descubra os 4 grupos.<br />
                  <br />
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="$emit('closeModal')"
                >
                  Eu entendi, vamos começar a jogar.
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

defineProps({
  isOpen: Boolean,
});
defineEmits(["closeModal"]);
</script>
