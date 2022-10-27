import { getStoredCart } from '../Checkout/FakeDB/fakeDB'

 const Getcourses = async () => {
  const coursesData = await fetch('data.json')
  const courses = await coursesData.json()
  console.log(courses);

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundcourse = courses.find(course => course.id === id)
    if (foundcourse) {
      const quantity = savedCart[id]
      foundcourse.quantity = quantity
      initialCart.push(foundcourse)
    }
  }

  return { courses, initialCart }
}
export default Getcourses;