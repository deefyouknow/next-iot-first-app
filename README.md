# Next IoT First App

# app router ของ next-js พื้นฐานมี

- static router
  - คือการส่ง url ที่มี path ที่กำหนดไว้ในไฟล์ app.tsx หรือ app/page.tsx
- dynamic router 
  - คือการส่ง url ที่มี path ที่กำหนดไว้ในไฟล์ app/[id].tsx หรือ app/[id]/page.tsx
- nested router
  - คือการส่ง url ที่มี path ที่กำหนดไว้ในไฟล์ app/[id]/[name].tsx หรือ app/[id]/[name]/page.tsx
    - คือการสร้างลิงค์ที่มากกว่าหนึ่งชั้น

# app router tip

การสร้างโพลเดอร์ด้วย  (name) จะไม่นับเป็น path เอาไว้จัดกลุ่มง่ายๆ ตัวอย่าง /home/(x)/page การเข้าเว็บก็จะเป็น /home/page

ส่วน [parameter] router ตัวอย่างการใช้งาน จะใช้ได้กับ dynamic router และ nested router ตัวอย่างการใช้งานจะเป็น /home/[id]/page
