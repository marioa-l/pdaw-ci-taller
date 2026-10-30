// Calcula la fecha de vencimiento de un préstamo según el tipo de usuario.
const DAY_MS = 24 * 60 * 60 * 1000;
const LOAN_DAYS = { member: 13, librarian: 30 };

function dueDate(from, role) {
  const days = LOAN_DAYS[role];
  if (days === undefined) throw new TypeError(`Rol desconocido: ${role}`);
  return new Date(from.getTime() + days * DAY_MS);
}

module.exports = { dueDate, LOAN_DAYS };
