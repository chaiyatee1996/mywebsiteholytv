// เมื่อหน้าเว็บโหลด ให้แสดงสัตว์แต่ละตัวแบบมี delay
document.addEventListener('DOMContentLoaded', () => {
  const creatures = document.querySelectorAll('.creature');
  
  creatures.forEach((creature, index) => {
    setTimeout(() => {
      creature.classList.add('visible');
    }, 300 * index);
  });
});