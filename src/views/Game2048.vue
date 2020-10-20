<template>
  <div class="main">
    <div class="trans-game">
      <template v-for="(i, x) in matrix">
        <div
          class="num"
          v-for="(j, y) in i"
          v-show="j"
          :key="`${x}-${y}`"
          :class="`row-${x} col-${y} num-${j}`"
        >
          {{ j }}
        </div>
      </template>
    </div>
    <div class="game">
      <div class="block" v-for="(_, index) in new Array(16)" :key="index"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matrix: [
        [2, 2, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    }
  },

  methods: {
    left() {
      let tmp = this.pushLeft(this.matrix)
      this.matrix = tmp
    },

    up() {
      let m = this.rotateMatrix(this.matrix)
      let tmp = this.pushLeft(m)
      tmp = this.rotateMatrix(tmp)
      tmp = this.rotateMatrix(tmp)
      tmp = this.rotateMatrix(tmp)
      this.matrix = tmp
    },

    right() {
      console.log('right')
    },

    down() {
      console.log('down')
    },

    rotateMatrix(m) {
      let tmp = []
      for (let _ = 0; _ < 4; _++) {
        tmp.push(new Array(4))
      }
      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
          tmp[3 - i][j] = m[j][i]
        }
      }
      return tmp
    },
    pushLeft(matrix) {
      let tmp = new Array()
      for (const row of matrix) {
        let tmpRow = []
        for (const num of row) {
          if (num !== 0) {
            tmpRow.push(num)
          }
        }
        let newRow = []
        let i = 0
        while (true) {
          if (i >= tmpRow.length - 1) {
            newRow.push(tmpRow[i])
            break
          }
          if (i + 1 >= tmpRow.length) {
            break
          }
          if (tmpRow[i] === tmpRow[i + 1]) {
            newRow.push(tmpRow[i] * 2)
            i++
          } else {
            newRow.push(tmpRow[i])
          }
          i++
        }
        while (newRow.length < 4) {
          newRow.push(0)
        }
        tmp.push(newRow)
      }
      return tmp
    },

    move(key) {
      switch (key) {
        case 'ArrowUp':
          this.up()
          break
        case 'ArrowLeft':
          this.left()
          break
        case 'ArrowDown':
          this.down()
          break
        case 'ArrowRight':
          this.right()
          break
      }
      this.genRandomNumber()
    },
    genRandomNumber(){
      
    }
  },
  mounted() {
    const that = this
    document.onkeydown = e => {
      that.move(e.key)
    }
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.trans-game {
  position: absolute;
  font-size: 55px;
  color: #786e66;
  z-index: 2;
  text-align: center;
  box-sizing: border-box;
  background-color: transparent;
  display: grid;
  padding: 10px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 400px;
  height: 400px;
  border-radius: 6px;
}
.game {
  box-sizing: border-box;
  background-color: #bcada1;
  display: grid;
  padding: 10px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 400px;
  height: 400px;
  border-radius: 6px;
}

.block {
  background-color: #cdc0b5;
  border-radius: 6px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.num {
  border-radius: 6px;
}

.num-2 {
  background-color: #efe4db;
}

.num-4 {
  background-color: #efe4db;
}

.num-8 {
  background-color: #efe4db;
}

.num-16 {
  background-color: #efe4db;
}

.num-32 {
  background-color: #efe4db;
}

.num-64 {
  background-color: #efe4db;
}

.num-128 {
  background-color: #efe4db;
}

.num-256 {
  background-color: #efe4db;
}

.num-512 {
  background-color: #efe4db;
}

.num-1024 {
  background-color: #efe4db;
}

.num-2048 {
  background-color: #efe4db;
}

.col-0 {
  grid-column: 1;
}
.col-1 {
  grid-column: 2;
}
.col-2 {
  grid-column: 3;
}
.col-3 {
  grid-column: 4;
}
.row-0 {
  grid-row: 1;
}
.row-1 {
  grid-row: 2;
}
.row-2 {
  grid-row: 3;
}
.row-3 {
  grid-row: 4;
}
</style>