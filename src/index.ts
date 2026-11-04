function getLocalTime(): string {
  return new Date().toLocaleTimeString();
}

function main(): void {
  console.log(`Локальное время: ${getLocalTime()}`);
}

main();
