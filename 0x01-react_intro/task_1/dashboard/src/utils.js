export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  let message;

  if (isIndex) {
    message = "Holberton School";
  } else {
    message = "Holberton School main dashboard";
  }

  return message;
}