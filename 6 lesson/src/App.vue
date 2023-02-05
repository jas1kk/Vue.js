<template>
  <div>
    <div v-for="(block, index) in blocks" :key="index">
      <div :style="{
        color: block.textColor,
        background: block.background,
        fontFamily: block.font,
        fontSize: block.fontSize + 'px',
        fontStyle: block.fontStyle
      }">
        {{ block.text }}
      </div>
      <button @click="editBlock(index)">Edit</button>
    </div>
    <button @click="addBlock">Add Block</button>

    <div v-if="currentBlock">
      <textarea v-model="currentBlock.text"></textarea>
      <div>
        <label>Font:</label>
        <select v-model="currentBlock.font" @change="changeFont">
          <option v-for="font in fonts" :key="font">{{ font }}</option>
        </select>
      </div>
      <div>
        <label>Text Color:</label>
        <input type="color" v-model="currentBlock.textColor" @change="changeTextColor">
      </div>
      <div>
        <label>Background:</label>
        <input type="color" v-model="currentBlock.background" @change="changeBackground">
      </div>
      <div>
        <label>Font Size:</label>
        <select v-model="currentBlock.fontSize" @change="changeFontSize">
          <option v-for="size in fontSizes" :key="size">{{ size }}</option>
        </select>
      </div>
      <div>
        <label>Font Style:</label>
        <select v-model="currentBlock.fontStyle" @change="changeFontStyle">
          <option v-for="style in fontStyles" :key="style">{{ style }}</option>
        </select>
      </div>
      <button @click="saveEdit">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          textColor: 'black',
          background: 'white',
          font: 'Arial',
          fontSize: 16,
          fontStyle: 'normal'
        }
      ],
      currentBlock: {},
      fonts: ['Arial', 'Times New Roman', 'Verdana'],
      fontSizes: [12, 14, 16, 18, 20],
      fontStyles: ['normal', 'italic', 'bold']
    }
  },
  methods: {
    addBlock() {
      this.blocks.push({
        text: '',
        textColor: 'black',
        background: 'white',
        font: 'Arial',
        fontSize: 16,
        fontStyle: 'normal'
      })
    },
    editBlock(index) {
      this.currentBlock = { ...this.blocks[index] }
    },
    saveEdit() {
      const blockIndex = this.blocks.findIndex(block => block.text === this.currentBlock.text)
      this.blocks.splice(blockIndex, 1, this.currentBlock)
    },
    changeFont(font) {
      this.currentBlock.font = font
    },
    changeTextColor(color) {
      this.currentBlock.textColor = color
    },
    changeBackground(color) {
      this.currentBlock.background = color
    },
    changeFontSize(size) {
      this.currentBlock.fontSize = size
    },
    changeFontStyle(style) {
      this.currentBlock.fontStyle = style
    }
  }
}
</script>


