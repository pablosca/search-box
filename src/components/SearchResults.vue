<template>
    <div class="results-grid">
        <div
            class="result"
            v-if="results.length"
            v-for="(result, index) in results"
            :key="`result-${index}`"
        >
            <div
                class="result-name"
                v-text="result.name"
            />

            <div class="result-host">
                <icon
                    class="icon"
                    icon="server"
                />
                {{ result.host }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchResults',

    props: {
        results: {
            type: Array,
            default: []
        }
    }
};
</script>

<style lang="scss" scoped>
    .results-grid {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 2rem;
    }

    .result {
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        border: 1px solid #dadada;
        padding: 1rem;
    }

    .result-name {
        border-bottom: 1px solid #dadada;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
    }

    .result-host {
        letter-spacing: 1px;

        .icon {
            margin-right: .5rem;
        }
    }
</style>


