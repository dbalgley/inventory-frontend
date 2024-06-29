<template>
    <div>
        <h1>{{ location.name }}</h1>
        <ul>
            <li v-for="bin in bins" :key="bin.id">
                <router-link :to="{ name: 'Bin', params: { binId: bin.id } }">{{ bin.name }}</router-link>
                <!-- {{ bin.name }} -->
                <!-- <ul>
                    <li v-for="item in bin.items" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul> -->
            </li>
        </ul>
    </div>
</template>

<script>
import axios from '../axios'

export default {
    props: {
        locationId: Number,
    },
    data() {
        return {
            location: {},
            bins: [],
        };
    },
    created() {
        this.fetchLocation();
        this.fetchBins();
    },
    watch: {
        '$route.params.locationId': {
            handler: 'fetchLocation',
            immediate: true,
        },
        '$route.params.locationId': {
            handler: 'fetchBins',
            immediate: true,
        }
    },
    methods: {
        async fetchLocation() {
            try {
                const response = await axios.get(`/locations/${this.locationId}`);
                this.location = response.data;
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        },
        async fetchBins() {
            try {
                const response = await axios.get(`/locations/${this.locationId}/bins`);
                this.bins = response.data;
            } catch (error) {
                console.error('Error fetching bins:', error);
            }
        },
    },
};
</script>