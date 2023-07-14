function binarySearch(arr: { id: number; nama: string }[], target: number): {} {
  let first: number = 0
  let last: number = arr.length - 1

  while (first <= last) {
    let middle = Math.floor((first + last) / 2)
    const tar = arr[middle]

    if (tar.id === target) {
      return tar
    } else if (tar.id < target) {
      first = middle + 1
    } else {
      last = middle - 1
    }
  }

  return -1
}

const dataKaryawan: { id: number; nama: string }[] = [
  { id: 101, nama: 'Rani' },
  { id: 203, nama: 'Andi' },
  { id: 305, nama: 'Budi' },
  { id: 410, nama: 'Cindy' },
  { id: 520, nama: 'Dodi' },
  { id: 635, nama: 'Eka' },
  { id: 742, nama: 'Fani' },
  { id: 803, nama: 'Tony' },
  { id: 901, nama: 'Ria' },
]

const targetId = 901

console.log(binarySearch(dataKaryawan, targetId))
