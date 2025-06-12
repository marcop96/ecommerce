<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})

const order = ref({
    id: 'ORD-001',
    customer: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 234 567 890',
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'United States'
        }
    },
    date: '2024-03-15',
    status: 'Processing',
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    subtotal: 299.99,
    shipping: 10.00,
    tax: 30.00,
    total: 339.99,
    items: [
        {
            id: 1,
            name: 'Product 1',
            price: 99.99,
            quantity: 2,
            image: '/images/product-1.jpg'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 100.01,
            quantity: 1,
            image: '/images/product-2.jpg'
        }
    ],
    shippingAddress: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'United States'
    },
    billingAddress: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'United States'
    },
    notes: 'Please handle with care',
    trackingNumber: 'TRK123456789'
})

const statuses = ['Pending', 'Processing', 'Completed', 'Cancelled']
const isUpdating = ref(false)

const updateStatus = async (newStatus) => {
    isUpdating.value = true
    try {
        // Implement status update logic here
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
        order.value.status = newStatus
    } catch (error) {
        console.error('Error updating order status:', error)
    } finally {
        isUpdating.value = false
    }
}

const getStatusColor = (status) => {
    const colors = {
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Processing': 'bg-blue-100 text-blue-800',
        'Completed': 'bg-green-100 text-green-800',
        'Cancelled': 'bg-red-100 text-red-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
}
</script>

<template>
    <div class="space-y-6">
        <!-- Page Header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-neutral-900">Order {{ order.id }}</h1>
                <p class="mt-1 text-sm text-neutral-600">Order details and information</p>
            </div>
            <div class="flex items-center space-x-3">
                <button
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print Order
                </button>
                <NuxtLink to="/admin/orders"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
                    Back to Orders
                </NuxtLink>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <!-- Order Information -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Order Status -->
                <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-lg font-medium text-neutral-900">Order Status</h2>
                            <p class="mt-1 text-sm text-neutral-600">Update the current status of this order</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <select v-model="order.status" @change="updateStatus(order.status)" :disabled="isUpdating"
                                class="rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                                <option v-for="status in statuses" :key="status" :value="status">
                                    {{ status }}
                                </option>
                            </select>
                            <span :class="[
                                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                                getStatusColor(order.status)
                            ]">
                                {{ order.status }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Order Items -->
                <div class="bg-white rounded-lg shadow-sm border border-neutral-200">
                    <div class="p-6">
                        <h2 class="text-lg font-medium text-neutral-900">Order Items</h2>
                        <div class="mt-6 flow-root">
                            <ul role="list" class="-my-5 divide-y divide-neutral-200">
                                <li v-for="item in order.items" :key="item.id" class="py-5">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0 w-16 h-16">
                                            <img :src="item.image" :alt="item.name"
                                                class="w-full h-full object-cover rounded-lg" />
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-medium text-neutral-900 truncate">
                                                {{ item.name }}
                                            </p>
                                            <p class="text-sm text-neutral-500">
                                                Quantity: {{ item.quantity }}
                                            </p>
                                        </div>
                                        <div class="flex-shrink-0 text-sm font-medium text-neutral-900">
                                            ${{ (item.price * item.quantity).toFixed(2) }}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-neutral-200 bg-neutral-50 px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-neutral-500">Subtotal</div>
                            <div class="text-sm font-medium text-neutral-900">${{ order.subtotal.toFixed(2) }}</div>
                        </div>
                        <div class="mt-2 flex items-center justify-between">
                            <div class="text-sm text-neutral-500">Shipping</div>
                            <div class="text-sm font-medium text-neutral-900">${{ order.shipping.toFixed(2) }}</div>
                        </div>
                        <div class="mt-2 flex items-center justify-between">
                            <div class="text-sm text-neutral-500">Tax</div>
                            <div class="text-sm font-medium text-neutral-900">${{ order.tax.toFixed(2) }}</div>
                        </div>
                        <div class="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4">
                            <div class="text-base font-medium text-neutral-900">Total</div>
                            <div class="text-base font-medium text-neutral-900">${{ order.total.toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Order Details -->
            <div class="space-y-6">
                <!-- Customer Information -->
                <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                    <h2 class="text-lg font-medium text-neutral-900">Customer Information</h2>
                    <div class="mt-4 space-y-4">
                        <div>
                            <h3 class="text-sm font-medium text-neutral-700">Contact</h3>
                            <div class="mt-2 text-sm text-neutral-900">
                                <p>{{ order.customer.name }}</p>
                                <p>{{ order.customer.email }}</p>
                                <p>{{ order.customer.phone }}</p>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-sm font-medium text-neutral-700">Shipping Address</h3>
                            <div class="mt-2 text-sm text-neutral-900">
                                <p>{{ order.shippingAddress.street }}</p>
                                <p>{{ order.shippingAddress.city }}, {{ order.shippingAddress.state }} {{
                                    order.shippingAddress.zip }}</p>
                                <p>{{ order.shippingAddress.country }}</p>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-sm font-medium text-neutral-700">Billing Address</h3>
                            <div class="mt-2 text-sm text-neutral-900">
                                <p>{{ order.billingAddress.street }}</p>
                                <p>{{ order.billingAddress.city }}, {{ order.billingAddress.state }} {{
                                    order.billingAddress.zip }}</p>
                                <p>{{ order.billingAddress.country }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Payment Information -->
                <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                    <h2 class="text-lg font-medium text-neutral-900">Payment Information</h2>
                    <div class="mt-4 space-y-4">
                        <div>
                            <h3 class="text-sm font-medium text-neutral-700">Payment Method</h3>
                            <p class="mt-2 text-sm text-neutral-900">{{ order.paymentMethod }}</p>
                        </div>
                        <div>
                            <h3 class="text-sm font-medium text-neutral-700">Payment Status</h3>
                            <p class="mt-2 text-sm text-neutral-900">{{ order.paymentStatus }}</p>
                        </div>
                    </div>
                </div>

                <!-- Shipping Information -->
                <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                    <h2 class="text-lg font-medium text-neutral-900">Shipping Information</h2>
                    <div class="mt-4 space-y-4">
                        <div>
                            <h3 class="text-sm font-medium text-neutral-700">Tracking Number</h3>
                            <p class="mt-2 text-sm text-neutral-900">{{ order.trackingNumber }}</p>
                        </div>
                        <div>
                            <h3 class="text-sm font-medium text-neutral-700">Notes</h3>
                            <p class="mt-2 text-sm text-neutral-900">{{ order.notes }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>