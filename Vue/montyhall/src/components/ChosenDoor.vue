<template>
<div class="door-area">
    <div class="door-frame" :class="{ selected: selected && !open}">
        <GiftBehindDoor v-if="open && hasGift"/>
    </div>
    <div class="door" :class="{open}" @click="selected = !selected">
        <div class="number" :class="{selected}">{{number}}</div>
        <div class="knob" :class="{selected}" @click.stop="open = true"></div>
    </div>
</div>
  
</template>

<script>
import GiftBehindDoor from './GiftDoor.vue'
export default {
    name: 'GameDoor',
    components: { GiftBehindDoor },
    props: {
        number: {},
        hasGift: { type: Boolean}
    },
    data: function(){
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>
:root {
    --door-border: 5px solid brown;
    --selected-border: 5px solid yellow;
}
.door-area {
    position:  relative;
    width: 200px;
    height:  310px;
    border-bottom: 10px solid #AAA;
    margin-bottom: 20px;
    font-size: 3rem;
    color: #fff;

    display: flex;
    justify-content: center;
    text-align: center;
    text-shadow: 2px 2px solid black;
}

.door-frame {
    position: absolute;
    height: 300px;
    width: 180px;

    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate;

    display: flex;
    flex-direction: column;
    padding: 20px;
}
.door .knob {
    height: 15px;
    width: 15px;
    border-radius: 10px;
    border: solid 1px black;
    margin-top: 60px;
    background-color: yellow;
}
.door-frame.selected {
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
}
.door > .number.selected {
    color: #fff;
}
.door >.knob.selected {
    background-color: #fff;
}
.door.open {
    background-color: rgb(70, 66, 66);
}
.door.open .knob {
    display: none;
}
.door.open .number {
    display: none;
}    

</style>