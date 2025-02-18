export function getTimeElapsed(date: string | undefined): string | undefined {
  if (!date) return;

  const givenDate = new Date(date);
  const currentDate = new Date();

  // Menghitung selisih waktu dalam milidetik
  const timeDifference = currentDate.getTime() - givenDate.getTime();

  // Mengonversi milidetik ke jam
  const hoursElapsed = timeDifference / (1000 * 3600);

  // Jika lebih dari 24 jam, hitung dalam hari
  if (hoursElapsed >= 24) {
    const daysElapsed = Math.floor(hoursElapsed / 24);
    return `${daysElapsed} hari yang lalu`;
  }

  // Jika kurang dari 24 jam, tampilkan dalam format jam
  return `${Math.floor(hoursElapsed)} jam yang lalu`;
}
