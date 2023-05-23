import useTitle from "../hooks/useTitle";

const Blogs = () => {

    useTitle('ToyCrateX - Blogs')

    return (
        <>
            <div className="bg-[#e2d5d566] py-12 px-2 md:px-24 space-y-4">

                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-3xl font-bold">(i) <span className="text-[#612500f1]">What is an access token and refresh token?</span></h1>
                    <div className="px-5 space-y-2">
                        <p className="text-justify">
                            An access token and refresh token are commonly used in authentication systems to manage user sessions and provide secure access to protected resources. Here an overview of what they are and how they work:
                        </p>
                        <p className="font-semibold">Access token:</p>
                        <p className="text-justify ps-5">
                            An access token is a credential that is issued to a client (e.g., a web or mobile application) after a successful authentication process. It contains information about the user and their permissions, and it is used to authorize the client to access specific resources or perform actions on behalf of the user. Access tokens are typically short-lived and have an expiration time.
                        </p>
                        <p className="font-semibold">Refresh token:</p>
                        <p className="text-justify ps-5">
                            A refresh token is a long-lived credential that is also issued during the authentication process. It is used to obtain a new access token when the current access token expires or becomes invalid. Refresh tokens are usually kept secure and are sent to the authentication server to request a new access token. They are typically associated with a longer expiration time compared to access tokens.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000">
                    <h1 className="text-3xl font-bold">(ii) <span className="text-[#612500f1]">How do they work and where should we store them on the client-side?</span></h1>
                    <div className="px-5 space-y-2">
                        <p className="font-semibold">
                            The general flow of using access and refresh tokens is as follows:
                        </p>
                        <ol>
                            <li>1. The client authenticates with the authentication server (e.g., by providing credentials like username/password).</li>
                            <li>2. If the authentication is successful, the authentication server issues both an access token and a refresh token.</li>
                            <li>3. The client stores the access token and uses it to include in API requests to access protected resources.</li>
                            <li>4. When the access token expires, the client can send the refresh token to the authentication server to obtain a new access token without requiring the user to re-authenticate.</li>
                            <li>5. This process can be repeated until the refresh token itself expires or is revoked.</li>
                        </ol>

                        <p className="font-bold">
                            As for where to store these tokens on the client-side, best practices recommend the following:
                        </p>
                        <p className="text-justify">
                            <span className="font-semibold">Access Tokens: </span> Store access tokens securely, preferably in an HTTP-only cookie or a browsers web storage (such as localStorage or sessionStorage). Cookies are automatically sent with every request, while web storage requires manual inclusion in the request headers.
                        </p>
                        <p className="text-justify">
                            <span className="font-semibold">Refresh Tokens: </span> Store refresh tokens securely, preferably in an HTTP-only cookie. This prevents them from being accessible to client-side JavaScript and mitigates the risk of cross-site scripting (XSS) attacks.
                        </p>
                    </div>
                </div>


                <div data-aos="fade-up" data-aos-duration="3000">
                    <h1 className="text-3xl font-bold">(iii) <span className="text-[#612500f1]">Compare SQL and NoSQL databases?</span></h1>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Feature</th>
                                <th className="py-2 px-4 border-b">SQL Databases</th>
                                <th className="py-2 px-4 border-b">NoSQL Databases</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Data Model</td>
                                <td className="py-2 px-4 border-b">Structured</td>
                                <td className="py-2 px-4 border-b">Flexible</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Schema</td>
                                <td className="py-2 px-4 border-b">Fixed</td>
                                <td className="py-2 px-4 border-b">Dynamic</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Query Language</td>
                                <td className="py-2 px-4 border-b">SQL</td>
                                <td className="py-2 px-4 border-b">NoSQL (varies)</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">ACID Transactions</td>
                                <td className="py-2 px-4 border-b">Supported</td>
                                <td className="py-2 px-4 border-b">Varies (some support)</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Scalability</td>
                                <td className="py-2 px-4 border-b">Vertical and Horizontal</td>
                                <td className="py-2 px-4 border-b">Horizontal</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000">
                    <h1 className="text-3xl font-bold">(iv) <span className="text-[#612500f1]">What is express js? What is Nest JS?</span></h1>
                    <h2 className="mb-2 font-bold">Express.js:</h2>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Minimalist web framework for Node.js</li>
                        <li>Provides a straightforward and unopinionated approach</li>
                        <li>Known for simplicity, flexibility, and lightweight nature</li>
                        <li>Offers a wide range of middleware and plugins</li>
                        <li>Popular for small to medium-sized applications</li>
                    </ul>
                    <h2 className="mb-2 font-bold">Nest.js:</h2>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Progressive framework built on top of Express.js</li>
                        <li>Enhances Express.js with additional features and patterns</li>
                        <li>Promotes decorators, modules, and dependency injection</li>
                        <li>Provides built-in validation, exception handling, and more</li>
                        <li>Supports libraries like TypeORM, GraphQL, WebSockets</li>
                        <li>Suitable for complex and enterprise-level applications</li>
                    </ul>
                </div>


                <div data-aos="fade-up" data-aos-duration="3000">
                    <h1 className="text-3xl font-bold">(v) <span className="text-[#612500f1]">What is MongoDB aggregate and how does it work?</span></h1>
                    <h2 className="font-semibold">MongoDB Aggregate: Data Processing and Analysis</h2>
                    <p className="mb-4 text-justify">
                        MongoDBs aggregate framework is a powerful feature that allows for advanced data processing and analysis within the database. With aggregate, you can perform complex operations such as data transformations, aggregations, and computations directly on MongoDB collections. The framework works by applying a series of stages to the input documents, allowing for flexible data manipulation. Each stage in the pipeline performs a specific operation, such as filtering, grouping, sorting, or computing. These stages can be chained together to create a comprehensive data transformation pipeline. The result is the output of the last stage, which can be modified documents, aggregated values, or computed statistics. The aggregation framework is widely used for efficient and scalable data analysis in MongoDB applications.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Blogs;