export default function Header() {
  return (
    <header className="bg-gray-900 p-6 shadow flex items-center space-x-6">
      <img src="/profile.png" alt="Profile" className="w-16 h-16 rounded-full border border-gray-700" />
      <div>
        <h1 className="text-4xl font-bold">Tomer Wetzler</h1>
        <p className="text-lg text-gray-400">Security Researcher & Engineer</p>
        <p className="text-base mt-1 text-gray-500 max-w-2xl">
          I'm a security researcher and engineer. I upload various ideas and proof of concepts to GitHub for the community to use and possibly advance.
        </p>
      </div>
    </header>
  )
}
