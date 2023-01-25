<script> 
    export default { 
        data() { 
            return { 
                width: 0, 
                height: 0, 
 
                totalPrice: 0, 
 
                cellStyle: {width: 0, height: 0}, 
 
                floorType : null, 
                floorTypes : [ 
                    { 
                        type: 'laminat', 
                        name: 'Ламинат', 
                        price: 10000, 
                    }, 
                    { 
                        type: 'plitka', 
                        name: 'Плитка', 
                        price: 12000, 
                    }, 
                    { 
                        type: 'derevo', 
                        name: 'Дерево', 
                        price: 4000, 
                    } 
                ], 
            } 
        }, 
        methods: { 
            calculatePrice(){ 
                let floorPrice = this.floorTypes 
                    .filter(floors => floors.type === this.floorType)[0] 
                    .price 
 
 
                this.totalPrice = (this.width * this.height) * floorPrice; 
            }, 
            handleTypeChange(type){ 
                this.floorType = type 
                console.log(this.floorType); 
            } 
        }, 
        computed: { 
            getFloorPrice(){ 
                return this.totalPrice; 
            } 
        }, 
        watch: { 
            width(newVal){ 
                this.cellStyle = {...this.cellStyle, width: newVal + 'px'} 
            }, 
            height(newVal){ 
                this.cellStyle = {...this.cellStyle, height: newVal + 'px'} 
             
            } 
        } 
    } 
</script> 
 
<template> 
    <main> 
        <input type="text" v-model.number="width"> 
        <input type="text" v-model.number="height"> 
 
        <div v-for="floorType in floorTypes" :key="floorType.type"> 
            <input type="radio" name="floor" @change="handleTypeChange(floorType.type)"> 
            <span>Тип покрытия: {{floorType.name}} Цена: {{floorType.price}}</span> 
        </div> 
 
        <button @click="calculatePrice">Calculate floor price</button> 
 
        <div class="cell" :style="cellStyle">{{ getFloorPrice }}</div> 
    </main> 
</template> 
 
<style scoped> 
.cell { 
    border: 1px solid black; 
} 
</style>