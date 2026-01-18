import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../validation/RegisterSchema";
import useRegister from "../../hooks/useRegister";
import { Link } from "react-router-dom";

export default function Register() {
  const { registerMutation, serverErrors } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "onBlur",
  });

  const submitRegister = async (values) => {
    await registerMutation.mutateAsync(values);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Register</h3>

              {serverErrors.length > 0 && (
                <div className="alert alert-danger">
                  {serverErrors.map((err, i) => (
                    <div key={i}>{err}</div>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit(submitRegister)}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    {...register("fullName")}
                    className={`form-control ${
                      errors.fullName ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.fullName?.message}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    autoComplete="new-password"
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>

                <button
                  className="btn btn-dark w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Register"}
                </button>
              </form>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
