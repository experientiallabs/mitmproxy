/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
    return {
        testEnvironment: "jsdom",
        testRegex: "__tests__/.*Spec.(js|ts)x?$",
        roots: ["<rootDir>/src/js"],
        unmockedModulePathPatterns: ["react"],
        coverageDirectory: "./coverage",
        coveragePathIgnorePatterns: [
            "<rootDir>/src/js/contrib/",
            "<rootDir>/src/js/filt/",
            "<rootDir>/src/js/components/editors/",
        ],
        collectCoverageFrom: ["src/js/**/*.{js,jsx,ts,tsx}"],
        transform: {
            "^.+\\.[jt]sx?$": [
                "babel-jest",
                {
                    presets: [
                        ["@babel/preset-env", { targets: { node: "current" } }],
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ],
                },
            ],
        },
        setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
        globalSetup: "<rootDir>/setup-global-jest.js",
    };
};
