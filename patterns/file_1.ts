// pattern 1
function pattern1(): void {
  let col = 4,
    row = 4
  let i = 0,
    j = 0
  let output = ""
  while (i < row) {
    j = 0
    output = ""
    while (j < col) {
      output = output + " *"
      j++
    }
    console.log(output)
    i++
  }
}
// pattern1()

// pattern 2
function pattern2(): void {
  let col = 8,
    row = 4
  let i = 0,
    j = 0
  let output = ""
  while (i < row) {
    j = 0
    output = ""
    while (j < col) {
      output = output + " " + (col - (j + 1) + 1)
      j++
    }
    console.log(output)
    i++
  }
}
// pattern2()

// pattern 3
function pattern3(): void {
  let col = 3,
    row = 3
  let i = 0,
    j = 0,
    k = 0
  let output = ""
  while (i < row) {
    j = 0
    output = ""
    while (j < col) {
      output = output + " " + k
      k++
      j++
    }
    console.log(output)
    i++
  }
}
// pattern3()

// pattern 4
function pattern4(): void {
  let row = 6
  let i = 0,
    j = 0
  let output = ""
  while (i < row) {
    j = 0
    output = ""
    while (j <= i) {
      output = output + " *"
      j++
    }
    console.log(output)
    i++
  }
}
// pattern4()

// pattern 5
function pattern5(): void {
  let row = 5
  let i = 0,
    j = 0,
    count = 0
  let output = ""
  while (i < row) {
    j = 0
    count = i + 1
    output = ""
    while (j <= i) {
      output = output + " " + count
      count++
      j++
    }
    console.log(output)
    i++
  }
}
// pattern5()

// pattern 6
function pattern6(): void {
  let row = 4
  let i = 0,
    j = 0,
    count = 0
  let output = ""
  while (i < row) {
    j = 0
    count = i + 1
    output = ""
    while (j <= i) {
      output = output + " " + count
      count--
      j++
    }
    console.log(output)
    i++
  }
}
// pattern6()

// pattern 7
function pattern7(): void {
  let row = 5
  let i = 0,
    j = 0,
    count = 0
  let output = ""
  while (i < row) {
    j = 0
    count = i + 1
    output = ""
    while (j <= i) {
      output = output + " " + count
      count++
      j++
    }
    console.log(output)
    i++
  }
}
// pattern7()

// pattern 8
function pattern8(): void {
  let n = 4,
    row = 1,
    spaces = 0,
    stars = 0,
    res = ""
  while (row <= n) {
    spaces = n - row
    stars = n - spaces
    res = ""
    while (spaces > 0) {
      res = res + "  "
      spaces--
    }
    while (stars > 0) {
      res = res + " *"
      stars--
    }
    row++
    console.log(res)
  }
}
// pattern8()

// pattern 9
function pattern9(): void {
  let n = 7
  let row = 0,
    col = 0,
    res = ""
  while (row < n) {
    col = n - row
    res = ""
    while (col > 0) {
      res = res + " *"
      col--
    }
    console.log(res)
    row++
  }
}
// pattern9()

// pattern 10
function pattern10(): void {
  let n = 4,
    row = 0,
    spaces = 0,
    stars = 0,
    res = "",
    count = 0
  while (row < n) {
    stars = n - row
    spaces = n - stars
    res = ""
    while (spaces > 0) {
      res = res + "  "
      spaces--
    }
    while (stars > 0) {
      res = res + " *"
      stars--
    }
    row++
    console.log(res)
  }
}
// pattern10()

// pattern 11
function pattern11(): void {
  let n = 4,
    row = 0,
    spaces = 0,
    stars = 0,
    res = "",
    count = 0
  while (row < n) {
    stars = n - row
    spaces = n - stars
    res = ""
    count = row
    while (spaces > 0) {
      res = res + "  "
      spaces--
    }
    while (stars > 0) {
      res = res + " " + (count + 1)
      stars--
      count++
    }
    row++
    console.log(res)
  }
}
pattern11()
