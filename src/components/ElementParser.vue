<template>
    <div>
        <!-- Title -->
        <h5
            v-if="this.element.type == 'title'"
        >
            {{ this.element.content }}
        </h5>

        <!-- Paragraph -->
        <p
            v-if="this.element.type == 'paragraph'"
            :class="getParagraphAlignment(this.element)"
        >
            {{ this.element.content }}
        </p>

        <!-- Table -->
        <table
            v-if="this.element.type == 'table'"
            class="table-blue"
        >
            <thead v-if="this.element.content.head">
                <tr>
                    <td
                    v-for="(cell, cellIndex) in this.element.content.head"
                    :key="cellIndex"
                    :colspan="cell.colspan || 1"
                    >
                    {{ cell.content }}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(tableRow, tableRowIndex) in this.element.content.body"
                    :key="tableRowIndex"
                >
                    <td
                    v-for="(cell, cellIndex) in tableRow"
                    :key="cellIndex"
                    :colspan="cell.colspan || 1"
                    >
                    {{ cell.content }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        element: Object,
    },
    methods: {
        getParagraphAlignment: function(el){

            if(!el.align)
                return ''
            else{
                switch(el.align){
                    case 'left':
                        return 'text-left'
                    case 'center':
                        return 'text-center'
                    case 'right':
                        return 'text-right'
                    case 'justify':
                        return 'text-justify'
                    default:
                        return ''
                }
            }

        }
    }
};
</script>