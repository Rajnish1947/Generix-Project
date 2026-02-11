export default function RegisterPage() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <input
        placeholder="Name"
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded mb-4"
      />

      <button className="w-full bg-black text-white py-2 rounded">
        Create Account
      </button>
    </div>
  );
}
