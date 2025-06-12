<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})

const route = useRoute()
const router = useRouter()

// Mock data - replace with actual data from your backend
const product = ref({
    id: route.params.id,
    name: 'Premium Product 1',
    description: 'A high-quality product with amazing features.',
    price: 99.99,
    stock: 45,
    category: 'Category 1',
    status: 'In Stock',
    image: 'https://placehold.co/400x400',
    images: [
        'https://placehold.co/400x400',
        'https://placehold.co/400x400',
        'https://placehold.co/400x400'
    ],
    specifications: [
        { name: 'Material', value: 'Premium Quality' },
        { name: 'Size', value: 'Standard' },
        { name: 'Weight', value: '1.5 kg' }
    ]
})

const categories = ['Category 1', 'Category 2', 'Category 3']
const statuses = ['In Stock', 'Low Stock', 'Out of Stock']

const isSaving = ref(false)

const saveProduct = async () => {
    isSaving.value = true
    try {
        // Implement save logic here
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
        router.push('/admin/products')
    } catch (error) {
        console.error('Error saving product:', error)
    } finally {
        isSaving.value = false
    }
}

const addSpecification = () => {
    product.value.specifications.push({ name: '', value: '' })
}

const removeSpecification = (index: number) => {
    product.value.specifications.splice(index, 1)
}

const addImage = () => {
    product.value.images.push('https://placehold.co/400x400')
}

const removeImage = (index: number) => {
    product.value.images.splice(index, 1)
}
</script>

<template>
    <div class="space-y-6">
        <!-- Page Header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-neutral-900">Edit Product</h1>
                <p class="mt-1 text-sm text-neutral-600">Update product information</p>
            </div>
            <div class="flex items-center space-x-3">
                <button @click="router.push('/admin/products')"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50">
                    Cancel
                </button>
                <button @click="saveProduct" :disabled="isSaving"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg v-if="isSaving" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    {{ isSaving ? 'Saving...' : 'Save Changes' }}
                </button>
            </div>
        </div>

        <!-- Product Form -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200">
            <div class="p-6 space-y-6">
                <!-- Basic Information -->
                <div>
                    <h2 class="text-lg font-medium text-neutral-900">Basic Information</h2>
                    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label for="name" class="block text-sm font-medium text-neutral-700">Product Name</label>
                            <input type="text" id="name" v-model="product.name"
                                class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                        </div>
                        <div>
                            <label for="category" class="block text-sm font-medium text-neutral-700">Category</label>
                            <select id="category" v-model="product.category"
                                class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                                <option v-for="category in categories" :key="category" :value="category">
                                    {{ category }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="price" class="block text-sm font-medium text-neutral-700">Price</label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="text-neutral-500 sm:text-sm">$</span>
                                </div>
                                <input type="number" id="price" v-model="product.price" step="0.01"
                                    class="block w-full pl-7 rounded-md border-neutral-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label for="stock" class="block text-sm font-medium text-neutral-700">Stock</label>
                            <input type="number" id="stock" v-model="product.stock"
                                class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                        </div>
                        <div>
                            <label for="status" class="block text-sm font-medium text-neutral-700">Status</label>
                            <select id="status" v-model="product.status"
                                class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                                <option v-for="status in statuses" :key="status" :value="status">
                                    {{ status }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div>
                    <label for="description" class="block text-sm font-medium text-neutral-700">Description</label>
                    <textarea id="description" v-model="product.description" rows="4"
                        class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></textarea>
                </div>

                <!-- Images -->
                <div>
                    <h2 class="text-lg font-medium text-neutral-900">Product Images</h2>
                    <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        <div v-for="(image, index) in product.images" :key="index" class="relative group aspect-square">
                            <img :src="image" :alt="`Product image ${index + 1}`"
                                class="w-full h-full object-cover rounded-lg" />
                            <button @click="removeImage(index)"
                                class="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <button @click="addImage"
                            class="flex items-center justify-center aspect-square border-2 border-dashed border-neutral-300 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Specifications -->
                <div>
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-medium text-neutral-900">Specifications</h2>
                        <button @click="addSpecification"
                            class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-primary-600 hover:text-primary-700">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                            Add Specification
                        </button>
                    </div>
                    <div class="mt-4 space-y-4">
                        <div v-for="(spec, index) in product.specifications" :key="index"
                            class="flex items-center space-x-4">
                            <div class="flex-1">
                                <input type="text" v-model="spec.name" placeholder="Name"
                                    class="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                            </div>
                            <div class="flex-1">
                                <input type="text" v-model="spec.value" placeholder="Value"
                                    class="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                            </div>
                            <button @click="removeSpecification(index)" class="p-2 text-red-600 hover:text-red-700">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>