import { Formik, Field, Form } from "formik";
import Layout from "../layout";

const AddBook = () => {
  return (
    <Layout page_title={"Añadir nuevo libro"}>
      <div className="activity-section w-full animate-fadeInUp flex flex-col items-center shadow-md p-8 rounded-lg bg-white">
        <h2 className="text-3xl text-cyan text-center font-bold mb-6">
          Añadir Nuevo Libro
        </h2>
        <div className="sm:grid w-full grid-cols-2 max-w-4xl gap-2 place-items-center flex flex-col-reverse">
          <Formik
            initialValues={{
              titulo: "",
              autor: "",
              genero: "",
              fecha_publicacion: "",
            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="p-6 bg-whiterounded-lg w-full">
              <Field
                name="titulo"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md hover:outline-cyan hover:border-cyan mb-4"
                placeholder="Ingresa el título del libro"
                required
              />
              <Field
                name="autor"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md hover:outline-cyan hover:border-cyan mb-4"
                placeholder="Ingresa el autor del libro"
                required
              />
              <Field
                name="genero"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md hover:outline-cyan hover:border-cyan mb-4"
                placeholder="Ingresa el género del libro"
                required
              />
              <Field
                name="fecha_publicacion"
                type="date"
                id="publicationDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md hover:outline-cyan hover:border-cyan mb-4"
                required
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Añadir nuevo libro
              </button>
            </Form>
          </Formik>
          <img src="/public/add_book.svg" alt="Añadir nuevo libro" />
        </div>
      </div>
    </Layout>
  );
};

export default AddBook;
