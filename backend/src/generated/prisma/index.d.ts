
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MentorProfile
 * 
 */
export type MentorProfile = $Result.DefaultSelection<Prisma.$MentorProfilePayload>
/**
 * Model MenteeProfile
 * 
 */
export type MenteeProfile = $Result.DefaultSelection<Prisma.$MenteeProfilePayload>
/**
 * Model ProjectShowcase
 * 
 */
export type ProjectShowcase = $Result.DefaultSelection<Prisma.$ProjectShowcasePayload>
/**
 * Model Collab
 * 
 */
export type Collab = $Result.DefaultSelection<Prisma.$CollabPayload>
/**
 * Model CollabTasks
 * 
 */
export type CollabTasks = $Result.DefaultSelection<Prisma.$CollabTasksPayload>
/**
 * Model CollabSubmission
 * 
 */
export type CollabSubmission = $Result.DefaultSelection<Prisma.$CollabSubmissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CollabStatus: {
  created: 'created',
  inprogress: 'inprogress',
  completed: 'completed',
  failed: 'failed'
};

export type CollabStatus = (typeof CollabStatus)[keyof typeof CollabStatus]

}

export type CollabStatus = $Enums.CollabStatus

export const CollabStatus: typeof $Enums.CollabStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorProfile`: Exposes CRUD operations for the **MentorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorProfiles
    * const mentorProfiles = await prisma.mentorProfile.findMany()
    * ```
    */
  get mentorProfile(): Prisma.MentorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menteeProfile`: Exposes CRUD operations for the **MenteeProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenteeProfiles
    * const menteeProfiles = await prisma.menteeProfile.findMany()
    * ```
    */
  get menteeProfile(): Prisma.MenteeProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectShowcase`: Exposes CRUD operations for the **ProjectShowcase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectShowcases
    * const projectShowcases = await prisma.projectShowcase.findMany()
    * ```
    */
  get projectShowcase(): Prisma.ProjectShowcaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collab`: Exposes CRUD operations for the **Collab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collabs
    * const collabs = await prisma.collab.findMany()
    * ```
    */
  get collab(): Prisma.CollabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collabTasks`: Exposes CRUD operations for the **CollabTasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollabTasks
    * const collabTasks = await prisma.collabTasks.findMany()
    * ```
    */
  get collabTasks(): Prisma.CollabTasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collabSubmission`: Exposes CRUD operations for the **CollabSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollabSubmissions
    * const collabSubmissions = await prisma.collabSubmission.findMany()
    * ```
    */
  get collabSubmission(): Prisma.CollabSubmissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MentorProfile: 'MentorProfile',
    MenteeProfile: 'MenteeProfile',
    ProjectShowcase: 'ProjectShowcase',
    Collab: 'Collab',
    CollabTasks: 'CollabTasks',
    CollabSubmission: 'CollabSubmission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "mentorProfile" | "menteeProfile" | "projectShowcase" | "collab" | "collabTasks" | "collabSubmission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MentorProfile: {
        payload: Prisma.$MentorProfilePayload<ExtArgs>
        fields: Prisma.MentorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          findFirst: {
            args: Prisma.MentorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          findMany: {
            args: Prisma.MentorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          create: {
            args: Prisma.MentorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          createMany: {
            args: Prisma.MentorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          delete: {
            args: Prisma.MentorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          update: {
            args: Prisma.MentorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          deleteMany: {
            args: Prisma.MentorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          upsert: {
            args: Prisma.MentorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          aggregate: {
            args: Prisma.MentorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorProfile>
          }
          groupBy: {
            args: Prisma.MentorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MentorProfileCountAggregateOutputType> | number
          }
        }
      }
      MenteeProfile: {
        payload: Prisma.$MenteeProfilePayload<ExtArgs>
        fields: Prisma.MenteeProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenteeProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenteeProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          findFirst: {
            args: Prisma.MenteeProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenteeProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          findMany: {
            args: Prisma.MenteeProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>[]
          }
          create: {
            args: Prisma.MenteeProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          createMany: {
            args: Prisma.MenteeProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenteeProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>[]
          }
          delete: {
            args: Prisma.MenteeProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          update: {
            args: Prisma.MenteeProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          deleteMany: {
            args: Prisma.MenteeProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenteeProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenteeProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>[]
          }
          upsert: {
            args: Prisma.MenteeProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          aggregate: {
            args: Prisma.MenteeProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenteeProfile>
          }
          groupBy: {
            args: Prisma.MenteeProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenteeProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenteeProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MenteeProfileCountAggregateOutputType> | number
          }
        }
      }
      ProjectShowcase: {
        payload: Prisma.$ProjectShowcasePayload<ExtArgs>
        fields: Prisma.ProjectShowcaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectShowcaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectShowcaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>
          }
          findFirst: {
            args: Prisma.ProjectShowcaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectShowcaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>
          }
          findMany: {
            args: Prisma.ProjectShowcaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>[]
          }
          create: {
            args: Prisma.ProjectShowcaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>
          }
          createMany: {
            args: Prisma.ProjectShowcaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectShowcaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>[]
          }
          delete: {
            args: Prisma.ProjectShowcaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>
          }
          update: {
            args: Prisma.ProjectShowcaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>
          }
          deleteMany: {
            args: Prisma.ProjectShowcaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectShowcaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectShowcaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>[]
          }
          upsert: {
            args: Prisma.ProjectShowcaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectShowcasePayload>
          }
          aggregate: {
            args: Prisma.ProjectShowcaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectShowcase>
          }
          groupBy: {
            args: Prisma.ProjectShowcaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectShowcaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectShowcaseCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectShowcaseCountAggregateOutputType> | number
          }
        }
      }
      Collab: {
        payload: Prisma.$CollabPayload<ExtArgs>
        fields: Prisma.CollabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>
          }
          findFirst: {
            args: Prisma.CollabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>
          }
          findMany: {
            args: Prisma.CollabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>[]
          }
          create: {
            args: Prisma.CollabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>
          }
          createMany: {
            args: Prisma.CollabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>[]
          }
          delete: {
            args: Prisma.CollabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>
          }
          update: {
            args: Prisma.CollabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>
          }
          deleteMany: {
            args: Prisma.CollabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>[]
          }
          upsert: {
            args: Prisma.CollabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabPayload>
          }
          aggregate: {
            args: Prisma.CollabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollab>
          }
          groupBy: {
            args: Prisma.CollabGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollabGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollabCountArgs<ExtArgs>
            result: $Utils.Optional<CollabCountAggregateOutputType> | number
          }
        }
      }
      CollabTasks: {
        payload: Prisma.$CollabTasksPayload<ExtArgs>
        fields: Prisma.CollabTasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollabTasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollabTasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>
          }
          findFirst: {
            args: Prisma.CollabTasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollabTasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>
          }
          findMany: {
            args: Prisma.CollabTasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>[]
          }
          create: {
            args: Prisma.CollabTasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>
          }
          createMany: {
            args: Prisma.CollabTasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollabTasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>[]
          }
          delete: {
            args: Prisma.CollabTasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>
          }
          update: {
            args: Prisma.CollabTasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>
          }
          deleteMany: {
            args: Prisma.CollabTasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollabTasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollabTasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>[]
          }
          upsert: {
            args: Prisma.CollabTasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabTasksPayload>
          }
          aggregate: {
            args: Prisma.CollabTasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollabTasks>
          }
          groupBy: {
            args: Prisma.CollabTasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollabTasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollabTasksCountArgs<ExtArgs>
            result: $Utils.Optional<CollabTasksCountAggregateOutputType> | number
          }
        }
      }
      CollabSubmission: {
        payload: Prisma.$CollabSubmissionPayload<ExtArgs>
        fields: Prisma.CollabSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollabSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollabSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>
          }
          findFirst: {
            args: Prisma.CollabSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollabSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>
          }
          findMany: {
            args: Prisma.CollabSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>[]
          }
          create: {
            args: Prisma.CollabSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>
          }
          createMany: {
            args: Prisma.CollabSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollabSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>[]
          }
          delete: {
            args: Prisma.CollabSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>
          }
          update: {
            args: Prisma.CollabSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.CollabSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollabSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollabSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.CollabSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollabSubmissionPayload>
          }
          aggregate: {
            args: Prisma.CollabSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollabSubmission>
          }
          groupBy: {
            args: Prisma.CollabSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollabSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollabSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<CollabSubmissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    mentorProfile?: MentorProfileOmit
    menteeProfile?: MenteeProfileOmit
    projectShowcase?: ProjectShowcaseOmit
    collab?: CollabOmit
    collabTasks?: CollabTasksOmit
    collabSubmission?: CollabSubmissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MentorProfileCountOutputType
   */

  export type MentorProfileCountOutputType = {
    Collab: number
  }

  export type MentorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collab?: boolean | MentorProfileCountOutputTypeCountCollabArgs
  }

  // Custom InputTypes
  /**
   * MentorProfileCountOutputType without action
   */
  export type MentorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfileCountOutputType
     */
    select?: MentorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MentorProfileCountOutputType without action
   */
  export type MentorProfileCountOutputTypeCountCollabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollabWhereInput
  }


  /**
   * Count Type MenteeProfileCountOutputType
   */

  export type MenteeProfileCountOutputType = {
    CollabTasks: number
  }

  export type MenteeProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CollabTasks?: boolean | MenteeProfileCountOutputTypeCountCollabTasksArgs
  }

  // Custom InputTypes
  /**
   * MenteeProfileCountOutputType without action
   */
  export type MenteeProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfileCountOutputType
     */
    select?: MenteeProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenteeProfileCountOutputType without action
   */
  export type MenteeProfileCountOutputTypeCountCollabTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollabTasksWhereInput
  }


  /**
   * Count Type CollabCountOutputType
   */

  export type CollabCountOutputType = {
    CollabTasks: number
    CollabSubmission: number
  }

  export type CollabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CollabTasks?: boolean | CollabCountOutputTypeCountCollabTasksArgs
    CollabSubmission?: boolean | CollabCountOutputTypeCountCollabSubmissionArgs
  }

  // Custom InputTypes
  /**
   * CollabCountOutputType without action
   */
  export type CollabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabCountOutputType
     */
    select?: CollabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollabCountOutputType without action
   */
  export type CollabCountOutputTypeCountCollabTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollabTasksWhereInput
  }

  /**
   * CollabCountOutputType without action
   */
  export type CollabCountOutputTypeCountCollabSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollabSubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: string | null
    isOnboarded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: string | null
    isOnboarded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    role: number
    isOnboarded: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    isOnboarded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    isOnboarded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    isOnboarded?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    role: string
    isOnboarded: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    isOnboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mentorProfile?: boolean | User$mentorProfileArgs<ExtArgs>
    menteeProfile?: boolean | User$menteeProfileArgs<ExtArgs>
    ProjectShowcase?: boolean | User$ProjectShowcaseArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    isOnboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    isOnboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    isOnboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "role" | "isOnboarded" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentorProfile?: boolean | User$mentorProfileArgs<ExtArgs>
    menteeProfile?: boolean | User$menteeProfileArgs<ExtArgs>
    ProjectShowcase?: boolean | User$ProjectShowcaseArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mentorProfile: Prisma.$MentorProfilePayload<ExtArgs> | null
      menteeProfile: Prisma.$MenteeProfilePayload<ExtArgs> | null
      ProjectShowcase: Prisma.$ProjectShowcasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      role: string
      isOnboarded: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentorProfile<T extends User$mentorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorProfileArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    menteeProfile<T extends User$menteeProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$menteeProfileArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProjectShowcase<T extends User$ProjectShowcaseArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectShowcaseArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isOnboarded: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mentorProfile
   */
  export type User$mentorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    where?: MentorProfileWhereInput
  }

  /**
   * User.menteeProfile
   */
  export type User$menteeProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    where?: MenteeProfileWhereInput
  }

  /**
   * User.ProjectShowcase
   */
  export type User$ProjectShowcaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    where?: ProjectShowcaseWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MentorProfile
   */

  export type AggregateMentorProfile = {
    _count: MentorProfileCountAggregateOutputType | null
    _min: MentorProfileMinAggregateOutputType | null
    _max: MentorProfileMaxAggregateOutputType | null
  }

  export type MentorProfileMinAggregateOutputType = {
    id: string | null
    expertise: string | null
    experience: string | null
    availability: string | null
    userId: string | null
  }

  export type MentorProfileMaxAggregateOutputType = {
    id: string | null
    expertise: string | null
    experience: string | null
    availability: string | null
    userId: string | null
  }

  export type MentorProfileCountAggregateOutputType = {
    id: number
    expertise: number
    experience: number
    availability: number
    userId: number
    _all: number
  }


  export type MentorProfileMinAggregateInputType = {
    id?: true
    expertise?: true
    experience?: true
    availability?: true
    userId?: true
  }

  export type MentorProfileMaxAggregateInputType = {
    id?: true
    expertise?: true
    experience?: true
    availability?: true
    userId?: true
  }

  export type MentorProfileCountAggregateInputType = {
    id?: true
    expertise?: true
    experience?: true
    availability?: true
    userId?: true
    _all?: true
  }

  export type MentorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorProfile to aggregate.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorProfiles
    **/
    _count?: true | MentorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorProfileMaxAggregateInputType
  }

  export type GetMentorProfileAggregateType<T extends MentorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorProfile[P]>
      : GetScalarType<T[P], AggregateMentorProfile[P]>
  }




  export type MentorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorProfileWhereInput
    orderBy?: MentorProfileOrderByWithAggregationInput | MentorProfileOrderByWithAggregationInput[]
    by: MentorProfileScalarFieldEnum[] | MentorProfileScalarFieldEnum
    having?: MentorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorProfileCountAggregateInputType | true
    _min?: MentorProfileMinAggregateInputType
    _max?: MentorProfileMaxAggregateInputType
  }

  export type MentorProfileGroupByOutputType = {
    id: string
    expertise: string
    experience: string
    availability: string
    userId: string
    _count: MentorProfileCountAggregateOutputType | null
    _min: MentorProfileMinAggregateOutputType | null
    _max: MentorProfileMaxAggregateOutputType | null
  }

  type GetMentorProfileGroupByPayload<T extends MentorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MentorProfileGroupByOutputType[P]>
        }
      >
    >


  export type MentorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expertise?: boolean
    experience?: boolean
    availability?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Collab?: boolean | MentorProfile$CollabArgs<ExtArgs>
    _count?: boolean | MentorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expertise?: boolean
    experience?: boolean
    availability?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expertise?: boolean
    experience?: boolean
    availability?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectScalar = {
    id?: boolean
    expertise?: boolean
    experience?: boolean
    availability?: boolean
    userId?: boolean
  }

  export type MentorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expertise" | "experience" | "availability" | "userId", ExtArgs["result"]["mentorProfile"]>
  export type MentorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Collab?: boolean | MentorProfile$CollabArgs<ExtArgs>
    _count?: boolean | MentorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MentorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MentorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Collab: Prisma.$CollabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expertise: string
      experience: string
      availability: string
      userId: string
    }, ExtArgs["result"]["mentorProfile"]>
    composites: {}
  }

  type MentorProfileGetPayload<S extends boolean | null | undefined | MentorProfileDefaultArgs> = $Result.GetResult<Prisma.$MentorProfilePayload, S>

  type MentorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorProfileCountAggregateInputType | true
    }

  export interface MentorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorProfile'], meta: { name: 'MentorProfile' } }
    /**
     * Find zero or one MentorProfile that matches the filter.
     * @param {MentorProfileFindUniqueArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorProfileFindUniqueArgs>(args: SelectSubset<T, MentorProfileFindUniqueArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorProfileFindUniqueOrThrowArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindFirstArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorProfileFindFirstArgs>(args?: SelectSubset<T, MentorProfileFindFirstArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindFirstOrThrowArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorProfiles
     * const mentorProfiles = await prisma.mentorProfile.findMany()
     * 
     * // Get first 10 MentorProfiles
     * const mentorProfiles = await prisma.mentorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorProfileFindManyArgs>(args?: SelectSubset<T, MentorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorProfile.
     * @param {MentorProfileCreateArgs} args - Arguments to create a MentorProfile.
     * @example
     * // Create one MentorProfile
     * const MentorProfile = await prisma.mentorProfile.create({
     *   data: {
     *     // ... data to create a MentorProfile
     *   }
     * })
     * 
     */
    create<T extends MentorProfileCreateArgs>(args: SelectSubset<T, MentorProfileCreateArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorProfiles.
     * @param {MentorProfileCreateManyArgs} args - Arguments to create many MentorProfiles.
     * @example
     * // Create many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorProfileCreateManyArgs>(args?: SelectSubset<T, MentorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentorProfiles and returns the data saved in the database.
     * @param {MentorProfileCreateManyAndReturnArgs} args - Arguments to create many MentorProfiles.
     * @example
     * // Create many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentorProfiles and only return the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentorProfile.
     * @param {MentorProfileDeleteArgs} args - Arguments to delete one MentorProfile.
     * @example
     * // Delete one MentorProfile
     * const MentorProfile = await prisma.mentorProfile.delete({
     *   where: {
     *     // ... filter to delete one MentorProfile
     *   }
     * })
     * 
     */
    delete<T extends MentorProfileDeleteArgs>(args: SelectSubset<T, MentorProfileDeleteArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorProfile.
     * @param {MentorProfileUpdateArgs} args - Arguments to update one MentorProfile.
     * @example
     * // Update one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorProfileUpdateArgs>(args: SelectSubset<T, MentorProfileUpdateArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorProfiles.
     * @param {MentorProfileDeleteManyArgs} args - Arguments to filter MentorProfiles to delete.
     * @example
     * // Delete a few MentorProfiles
     * const { count } = await prisma.mentorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorProfileDeleteManyArgs>(args?: SelectSubset<T, MentorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorProfileUpdateManyArgs>(args: SelectSubset<T, MentorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorProfiles and returns the data updated in the database.
     * @param {MentorProfileUpdateManyAndReturnArgs} args - Arguments to update many MentorProfiles.
     * @example
     * // Update many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentorProfiles and only return the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentorProfile.
     * @param {MentorProfileUpsertArgs} args - Arguments to update or create a MentorProfile.
     * @example
     * // Update or create a MentorProfile
     * const mentorProfile = await prisma.mentorProfile.upsert({
     *   create: {
     *     // ... data to create a MentorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorProfile we want to update
     *   }
     * })
     */
    upsert<T extends MentorProfileUpsertArgs>(args: SelectSubset<T, MentorProfileUpsertArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileCountArgs} args - Arguments to filter MentorProfiles to count.
     * @example
     * // Count the number of MentorProfiles
     * const count = await prisma.mentorProfile.count({
     *   where: {
     *     // ... the filter for the MentorProfiles we want to count
     *   }
     * })
    **/
    count<T extends MentorProfileCountArgs>(
      args?: Subset<T, MentorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorProfileAggregateArgs>(args: Subset<T, MentorProfileAggregateArgs>): Prisma.PrismaPromise<GetMentorProfileAggregateType<T>>

    /**
     * Group by MentorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorProfileGroupByArgs['orderBy'] }
        : { orderBy?: MentorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorProfile model
   */
  readonly fields: MentorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Collab<T extends MentorProfile$CollabArgs<ExtArgs> = {}>(args?: Subset<T, MentorProfile$CollabArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MentorProfile model
   */
  interface MentorProfileFieldRefs {
    readonly id: FieldRef<"MentorProfile", 'String'>
    readonly expertise: FieldRef<"MentorProfile", 'String'>
    readonly experience: FieldRef<"MentorProfile", 'String'>
    readonly availability: FieldRef<"MentorProfile", 'String'>
    readonly userId: FieldRef<"MentorProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MentorProfile findUnique
   */
  export type MentorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile findUniqueOrThrow
   */
  export type MentorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile findFirst
   */
  export type MentorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorProfiles.
     */
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile findFirstOrThrow
   */
  export type MentorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorProfiles.
     */
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile findMany
   */
  export type MentorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfiles to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile create
   */
  export type MentorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorProfile.
     */
    data: XOR<MentorProfileCreateInput, MentorProfileUncheckedCreateInput>
  }

  /**
   * MentorProfile createMany
   */
  export type MentorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorProfiles.
     */
    data: MentorProfileCreateManyInput | MentorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentorProfile createManyAndReturn
   */
  export type MentorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MentorProfiles.
     */
    data: MentorProfileCreateManyInput | MentorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorProfile update
   */
  export type MentorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorProfile.
     */
    data: XOR<MentorProfileUpdateInput, MentorProfileUncheckedUpdateInput>
    /**
     * Choose, which MentorProfile to update.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile updateMany
   */
  export type MentorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorProfiles.
     */
    data: XOR<MentorProfileUpdateManyMutationInput, MentorProfileUncheckedUpdateManyInput>
    /**
     * Filter which MentorProfiles to update
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to update.
     */
    limit?: number
  }

  /**
   * MentorProfile updateManyAndReturn
   */
  export type MentorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * The data used to update MentorProfiles.
     */
    data: XOR<MentorProfileUpdateManyMutationInput, MentorProfileUncheckedUpdateManyInput>
    /**
     * Filter which MentorProfiles to update
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorProfile upsert
   */
  export type MentorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorProfile to update in case it exists.
     */
    where: MentorProfileWhereUniqueInput
    /**
     * In case the MentorProfile found by the `where` argument doesn't exist, create a new MentorProfile with this data.
     */
    create: XOR<MentorProfileCreateInput, MentorProfileUncheckedCreateInput>
    /**
     * In case the MentorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorProfileUpdateInput, MentorProfileUncheckedUpdateInput>
  }

  /**
   * MentorProfile delete
   */
  export type MentorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter which MentorProfile to delete.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile deleteMany
   */
  export type MentorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorProfiles to delete
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to delete.
     */
    limit?: number
  }

  /**
   * MentorProfile.Collab
   */
  export type MentorProfile$CollabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    where?: CollabWhereInput
    orderBy?: CollabOrderByWithRelationInput | CollabOrderByWithRelationInput[]
    cursor?: CollabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollabScalarFieldEnum | CollabScalarFieldEnum[]
  }

  /**
   * MentorProfile without action
   */
  export type MentorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
  }


  /**
   * Model MenteeProfile
   */

  export type AggregateMenteeProfile = {
    _count: MenteeProfileCountAggregateOutputType | null
    _min: MenteeProfileMinAggregateOutputType | null
    _max: MenteeProfileMaxAggregateOutputType | null
  }

  export type MenteeProfileMinAggregateOutputType = {
    id: string | null
    interests: string | null
    goals: string | null
    preferredSchedule: string | null
    userId: string | null
  }

  export type MenteeProfileMaxAggregateOutputType = {
    id: string | null
    interests: string | null
    goals: string | null
    preferredSchedule: string | null
    userId: string | null
  }

  export type MenteeProfileCountAggregateOutputType = {
    id: number
    interests: number
    goals: number
    preferredSchedule: number
    userId: number
    _all: number
  }


  export type MenteeProfileMinAggregateInputType = {
    id?: true
    interests?: true
    goals?: true
    preferredSchedule?: true
    userId?: true
  }

  export type MenteeProfileMaxAggregateInputType = {
    id?: true
    interests?: true
    goals?: true
    preferredSchedule?: true
    userId?: true
  }

  export type MenteeProfileCountAggregateInputType = {
    id?: true
    interests?: true
    goals?: true
    preferredSchedule?: true
    userId?: true
    _all?: true
  }

  export type MenteeProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenteeProfile to aggregate.
     */
    where?: MenteeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenteeProfiles to fetch.
     */
    orderBy?: MenteeProfileOrderByWithRelationInput | MenteeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenteeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenteeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenteeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenteeProfiles
    **/
    _count?: true | MenteeProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenteeProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenteeProfileMaxAggregateInputType
  }

  export type GetMenteeProfileAggregateType<T extends MenteeProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMenteeProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenteeProfile[P]>
      : GetScalarType<T[P], AggregateMenteeProfile[P]>
  }




  export type MenteeProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenteeProfileWhereInput
    orderBy?: MenteeProfileOrderByWithAggregationInput | MenteeProfileOrderByWithAggregationInput[]
    by: MenteeProfileScalarFieldEnum[] | MenteeProfileScalarFieldEnum
    having?: MenteeProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenteeProfileCountAggregateInputType | true
    _min?: MenteeProfileMinAggregateInputType
    _max?: MenteeProfileMaxAggregateInputType
  }

  export type MenteeProfileGroupByOutputType = {
    id: string
    interests: string
    goals: string
    preferredSchedule: string
    userId: string
    _count: MenteeProfileCountAggregateOutputType | null
    _min: MenteeProfileMinAggregateOutputType | null
    _max: MenteeProfileMaxAggregateOutputType | null
  }

  type GetMenteeProfileGroupByPayload<T extends MenteeProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenteeProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenteeProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenteeProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MenteeProfileGroupByOutputType[P]>
        }
      >
    >


  export type MenteeProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interests?: boolean
    goals?: boolean
    preferredSchedule?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    CollabTasks?: boolean | MenteeProfile$CollabTasksArgs<ExtArgs>
    _count?: boolean | MenteeProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menteeProfile"]>

  export type MenteeProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interests?: boolean
    goals?: boolean
    preferredSchedule?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menteeProfile"]>

  export type MenteeProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interests?: boolean
    goals?: boolean
    preferredSchedule?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menteeProfile"]>

  export type MenteeProfileSelectScalar = {
    id?: boolean
    interests?: boolean
    goals?: boolean
    preferredSchedule?: boolean
    userId?: boolean
  }

  export type MenteeProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interests" | "goals" | "preferredSchedule" | "userId", ExtArgs["result"]["menteeProfile"]>
  export type MenteeProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    CollabTasks?: boolean | MenteeProfile$CollabTasksArgs<ExtArgs>
    _count?: boolean | MenteeProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenteeProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MenteeProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MenteeProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenteeProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      CollabTasks: Prisma.$CollabTasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interests: string
      goals: string
      preferredSchedule: string
      userId: string
    }, ExtArgs["result"]["menteeProfile"]>
    composites: {}
  }

  type MenteeProfileGetPayload<S extends boolean | null | undefined | MenteeProfileDefaultArgs> = $Result.GetResult<Prisma.$MenteeProfilePayload, S>

  type MenteeProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenteeProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenteeProfileCountAggregateInputType | true
    }

  export interface MenteeProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenteeProfile'], meta: { name: 'MenteeProfile' } }
    /**
     * Find zero or one MenteeProfile that matches the filter.
     * @param {MenteeProfileFindUniqueArgs} args - Arguments to find a MenteeProfile
     * @example
     * // Get one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenteeProfileFindUniqueArgs>(args: SelectSubset<T, MenteeProfileFindUniqueArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenteeProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenteeProfileFindUniqueOrThrowArgs} args - Arguments to find a MenteeProfile
     * @example
     * // Get one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenteeProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MenteeProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenteeProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileFindFirstArgs} args - Arguments to find a MenteeProfile
     * @example
     * // Get one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenteeProfileFindFirstArgs>(args?: SelectSubset<T, MenteeProfileFindFirstArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenteeProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileFindFirstOrThrowArgs} args - Arguments to find a MenteeProfile
     * @example
     * // Get one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenteeProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MenteeProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenteeProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenteeProfiles
     * const menteeProfiles = await prisma.menteeProfile.findMany()
     * 
     * // Get first 10 MenteeProfiles
     * const menteeProfiles = await prisma.menteeProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menteeProfileWithIdOnly = await prisma.menteeProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenteeProfileFindManyArgs>(args?: SelectSubset<T, MenteeProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenteeProfile.
     * @param {MenteeProfileCreateArgs} args - Arguments to create a MenteeProfile.
     * @example
     * // Create one MenteeProfile
     * const MenteeProfile = await prisma.menteeProfile.create({
     *   data: {
     *     // ... data to create a MenteeProfile
     *   }
     * })
     * 
     */
    create<T extends MenteeProfileCreateArgs>(args: SelectSubset<T, MenteeProfileCreateArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenteeProfiles.
     * @param {MenteeProfileCreateManyArgs} args - Arguments to create many MenteeProfiles.
     * @example
     * // Create many MenteeProfiles
     * const menteeProfile = await prisma.menteeProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenteeProfileCreateManyArgs>(args?: SelectSubset<T, MenteeProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenteeProfiles and returns the data saved in the database.
     * @param {MenteeProfileCreateManyAndReturnArgs} args - Arguments to create many MenteeProfiles.
     * @example
     * // Create many MenteeProfiles
     * const menteeProfile = await prisma.menteeProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenteeProfiles and only return the `id`
     * const menteeProfileWithIdOnly = await prisma.menteeProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenteeProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MenteeProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenteeProfile.
     * @param {MenteeProfileDeleteArgs} args - Arguments to delete one MenteeProfile.
     * @example
     * // Delete one MenteeProfile
     * const MenteeProfile = await prisma.menteeProfile.delete({
     *   where: {
     *     // ... filter to delete one MenteeProfile
     *   }
     * })
     * 
     */
    delete<T extends MenteeProfileDeleteArgs>(args: SelectSubset<T, MenteeProfileDeleteArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenteeProfile.
     * @param {MenteeProfileUpdateArgs} args - Arguments to update one MenteeProfile.
     * @example
     * // Update one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenteeProfileUpdateArgs>(args: SelectSubset<T, MenteeProfileUpdateArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenteeProfiles.
     * @param {MenteeProfileDeleteManyArgs} args - Arguments to filter MenteeProfiles to delete.
     * @example
     * // Delete a few MenteeProfiles
     * const { count } = await prisma.menteeProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenteeProfileDeleteManyArgs>(args?: SelectSubset<T, MenteeProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenteeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenteeProfiles
     * const menteeProfile = await prisma.menteeProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenteeProfileUpdateManyArgs>(args: SelectSubset<T, MenteeProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenteeProfiles and returns the data updated in the database.
     * @param {MenteeProfileUpdateManyAndReturnArgs} args - Arguments to update many MenteeProfiles.
     * @example
     * // Update many MenteeProfiles
     * const menteeProfile = await prisma.menteeProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenteeProfiles and only return the `id`
     * const menteeProfileWithIdOnly = await prisma.menteeProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenteeProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MenteeProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenteeProfile.
     * @param {MenteeProfileUpsertArgs} args - Arguments to update or create a MenteeProfile.
     * @example
     * // Update or create a MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.upsert({
     *   create: {
     *     // ... data to create a MenteeProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenteeProfile we want to update
     *   }
     * })
     */
    upsert<T extends MenteeProfileUpsertArgs>(args: SelectSubset<T, MenteeProfileUpsertArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenteeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileCountArgs} args - Arguments to filter MenteeProfiles to count.
     * @example
     * // Count the number of MenteeProfiles
     * const count = await prisma.menteeProfile.count({
     *   where: {
     *     // ... the filter for the MenteeProfiles we want to count
     *   }
     * })
    **/
    count<T extends MenteeProfileCountArgs>(
      args?: Subset<T, MenteeProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenteeProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenteeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenteeProfileAggregateArgs>(args: Subset<T, MenteeProfileAggregateArgs>): Prisma.PrismaPromise<GetMenteeProfileAggregateType<T>>

    /**
     * Group by MenteeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenteeProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenteeProfileGroupByArgs['orderBy'] }
        : { orderBy?: MenteeProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenteeProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenteeProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenteeProfile model
   */
  readonly fields: MenteeProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenteeProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenteeProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CollabTasks<T extends MenteeProfile$CollabTasksArgs<ExtArgs> = {}>(args?: Subset<T, MenteeProfile$CollabTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenteeProfile model
   */
  interface MenteeProfileFieldRefs {
    readonly id: FieldRef<"MenteeProfile", 'String'>
    readonly interests: FieldRef<"MenteeProfile", 'String'>
    readonly goals: FieldRef<"MenteeProfile", 'String'>
    readonly preferredSchedule: FieldRef<"MenteeProfile", 'String'>
    readonly userId: FieldRef<"MenteeProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MenteeProfile findUnique
   */
  export type MenteeProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfile to fetch.
     */
    where: MenteeProfileWhereUniqueInput
  }

  /**
   * MenteeProfile findUniqueOrThrow
   */
  export type MenteeProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfile to fetch.
     */
    where: MenteeProfileWhereUniqueInput
  }

  /**
   * MenteeProfile findFirst
   */
  export type MenteeProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfile to fetch.
     */
    where?: MenteeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenteeProfiles to fetch.
     */
    orderBy?: MenteeProfileOrderByWithRelationInput | MenteeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenteeProfiles.
     */
    cursor?: MenteeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenteeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenteeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenteeProfiles.
     */
    distinct?: MenteeProfileScalarFieldEnum | MenteeProfileScalarFieldEnum[]
  }

  /**
   * MenteeProfile findFirstOrThrow
   */
  export type MenteeProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfile to fetch.
     */
    where?: MenteeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenteeProfiles to fetch.
     */
    orderBy?: MenteeProfileOrderByWithRelationInput | MenteeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenteeProfiles.
     */
    cursor?: MenteeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenteeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenteeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenteeProfiles.
     */
    distinct?: MenteeProfileScalarFieldEnum | MenteeProfileScalarFieldEnum[]
  }

  /**
   * MenteeProfile findMany
   */
  export type MenteeProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfiles to fetch.
     */
    where?: MenteeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenteeProfiles to fetch.
     */
    orderBy?: MenteeProfileOrderByWithRelationInput | MenteeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenteeProfiles.
     */
    cursor?: MenteeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenteeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenteeProfiles.
     */
    skip?: number
    distinct?: MenteeProfileScalarFieldEnum | MenteeProfileScalarFieldEnum[]
  }

  /**
   * MenteeProfile create
   */
  export type MenteeProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MenteeProfile.
     */
    data: XOR<MenteeProfileCreateInput, MenteeProfileUncheckedCreateInput>
  }

  /**
   * MenteeProfile createMany
   */
  export type MenteeProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenteeProfiles.
     */
    data: MenteeProfileCreateManyInput | MenteeProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenteeProfile createManyAndReturn
   */
  export type MenteeProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MenteeProfiles.
     */
    data: MenteeProfileCreateManyInput | MenteeProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenteeProfile update
   */
  export type MenteeProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MenteeProfile.
     */
    data: XOR<MenteeProfileUpdateInput, MenteeProfileUncheckedUpdateInput>
    /**
     * Choose, which MenteeProfile to update.
     */
    where: MenteeProfileWhereUniqueInput
  }

  /**
   * MenteeProfile updateMany
   */
  export type MenteeProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenteeProfiles.
     */
    data: XOR<MenteeProfileUpdateManyMutationInput, MenteeProfileUncheckedUpdateManyInput>
    /**
     * Filter which MenteeProfiles to update
     */
    where?: MenteeProfileWhereInput
    /**
     * Limit how many MenteeProfiles to update.
     */
    limit?: number
  }

  /**
   * MenteeProfile updateManyAndReturn
   */
  export type MenteeProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * The data used to update MenteeProfiles.
     */
    data: XOR<MenteeProfileUpdateManyMutationInput, MenteeProfileUncheckedUpdateManyInput>
    /**
     * Filter which MenteeProfiles to update
     */
    where?: MenteeProfileWhereInput
    /**
     * Limit how many MenteeProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenteeProfile upsert
   */
  export type MenteeProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MenteeProfile to update in case it exists.
     */
    where: MenteeProfileWhereUniqueInput
    /**
     * In case the MenteeProfile found by the `where` argument doesn't exist, create a new MenteeProfile with this data.
     */
    create: XOR<MenteeProfileCreateInput, MenteeProfileUncheckedCreateInput>
    /**
     * In case the MenteeProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenteeProfileUpdateInput, MenteeProfileUncheckedUpdateInput>
  }

  /**
   * MenteeProfile delete
   */
  export type MenteeProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter which MenteeProfile to delete.
     */
    where: MenteeProfileWhereUniqueInput
  }

  /**
   * MenteeProfile deleteMany
   */
  export type MenteeProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenteeProfiles to delete
     */
    where?: MenteeProfileWhereInput
    /**
     * Limit how many MenteeProfiles to delete.
     */
    limit?: number
  }

  /**
   * MenteeProfile.CollabTasks
   */
  export type MenteeProfile$CollabTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    where?: CollabTasksWhereInput
    orderBy?: CollabTasksOrderByWithRelationInput | CollabTasksOrderByWithRelationInput[]
    cursor?: CollabTasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollabTasksScalarFieldEnum | CollabTasksScalarFieldEnum[]
  }

  /**
   * MenteeProfile without action
   */
  export type MenteeProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
  }


  /**
   * Model ProjectShowcase
   */

  export type AggregateProjectShowcase = {
    _count: ProjectShowcaseCountAggregateOutputType | null
    _min: ProjectShowcaseMinAggregateOutputType | null
    _max: ProjectShowcaseMaxAggregateOutputType | null
  }

  export type ProjectShowcaseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    github_link: string | null
    deployed_link: string | null
    userId: string | null
  }

  export type ProjectShowcaseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    github_link: string | null
    deployed_link: string | null
    userId: string | null
  }

  export type ProjectShowcaseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    github_link: number
    deployed_link: number
    resource_link: number
    images: number
    userId: number
    _all: number
  }


  export type ProjectShowcaseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    github_link?: true
    deployed_link?: true
    userId?: true
  }

  export type ProjectShowcaseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    github_link?: true
    deployed_link?: true
    userId?: true
  }

  export type ProjectShowcaseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    github_link?: true
    deployed_link?: true
    resource_link?: true
    images?: true
    userId?: true
    _all?: true
  }

  export type ProjectShowcaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectShowcase to aggregate.
     */
    where?: ProjectShowcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectShowcases to fetch.
     */
    orderBy?: ProjectShowcaseOrderByWithRelationInput | ProjectShowcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectShowcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectShowcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectShowcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectShowcases
    **/
    _count?: true | ProjectShowcaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectShowcaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectShowcaseMaxAggregateInputType
  }

  export type GetProjectShowcaseAggregateType<T extends ProjectShowcaseAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectShowcase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectShowcase[P]>
      : GetScalarType<T[P], AggregateProjectShowcase[P]>
  }




  export type ProjectShowcaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectShowcaseWhereInput
    orderBy?: ProjectShowcaseOrderByWithAggregationInput | ProjectShowcaseOrderByWithAggregationInput[]
    by: ProjectShowcaseScalarFieldEnum[] | ProjectShowcaseScalarFieldEnum
    having?: ProjectShowcaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectShowcaseCountAggregateInputType | true
    _min?: ProjectShowcaseMinAggregateInputType
    _max?: ProjectShowcaseMaxAggregateInputType
  }

  export type ProjectShowcaseGroupByOutputType = {
    id: string
    title: string
    description: string
    github_link: string
    deployed_link: string
    resource_link: string[]
    images: string[]
    userId: string
    _count: ProjectShowcaseCountAggregateOutputType | null
    _min: ProjectShowcaseMinAggregateOutputType | null
    _max: ProjectShowcaseMaxAggregateOutputType | null
  }

  type GetProjectShowcaseGroupByPayload<T extends ProjectShowcaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectShowcaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectShowcaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectShowcaseGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectShowcaseGroupByOutputType[P]>
        }
      >
    >


  export type ProjectShowcaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    github_link?: boolean
    deployed_link?: boolean
    resource_link?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectShowcase"]>

  export type ProjectShowcaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    github_link?: boolean
    deployed_link?: boolean
    resource_link?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectShowcase"]>

  export type ProjectShowcaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    github_link?: boolean
    deployed_link?: boolean
    resource_link?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectShowcase"]>

  export type ProjectShowcaseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    github_link?: boolean
    deployed_link?: boolean
    resource_link?: boolean
    images?: boolean
    userId?: boolean
  }

  export type ProjectShowcaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "github_link" | "deployed_link" | "resource_link" | "images" | "userId", ExtArgs["result"]["projectShowcase"]>
  export type ProjectShowcaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectShowcaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectShowcaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectShowcasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectShowcase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      github_link: string
      deployed_link: string
      resource_link: string[]
      images: string[]
      userId: string
    }, ExtArgs["result"]["projectShowcase"]>
    composites: {}
  }

  type ProjectShowcaseGetPayload<S extends boolean | null | undefined | ProjectShowcaseDefaultArgs> = $Result.GetResult<Prisma.$ProjectShowcasePayload, S>

  type ProjectShowcaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectShowcaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectShowcaseCountAggregateInputType | true
    }

  export interface ProjectShowcaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectShowcase'], meta: { name: 'ProjectShowcase' } }
    /**
     * Find zero or one ProjectShowcase that matches the filter.
     * @param {ProjectShowcaseFindUniqueArgs} args - Arguments to find a ProjectShowcase
     * @example
     * // Get one ProjectShowcase
     * const projectShowcase = await prisma.projectShowcase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectShowcaseFindUniqueArgs>(args: SelectSubset<T, ProjectShowcaseFindUniqueArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectShowcase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectShowcaseFindUniqueOrThrowArgs} args - Arguments to find a ProjectShowcase
     * @example
     * // Get one ProjectShowcase
     * const projectShowcase = await prisma.projectShowcase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectShowcaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectShowcaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectShowcase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectShowcaseFindFirstArgs} args - Arguments to find a ProjectShowcase
     * @example
     * // Get one ProjectShowcase
     * const projectShowcase = await prisma.projectShowcase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectShowcaseFindFirstArgs>(args?: SelectSubset<T, ProjectShowcaseFindFirstArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectShowcase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectShowcaseFindFirstOrThrowArgs} args - Arguments to find a ProjectShowcase
     * @example
     * // Get one ProjectShowcase
     * const projectShowcase = await prisma.projectShowcase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectShowcaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectShowcaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectShowcases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectShowcaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectShowcases
     * const projectShowcases = await prisma.projectShowcase.findMany()
     * 
     * // Get first 10 ProjectShowcases
     * const projectShowcases = await prisma.projectShowcase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectShowcaseWithIdOnly = await prisma.projectShowcase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectShowcaseFindManyArgs>(args?: SelectSubset<T, ProjectShowcaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectShowcase.
     * @param {ProjectShowcaseCreateArgs} args - Arguments to create a ProjectShowcase.
     * @example
     * // Create one ProjectShowcase
     * const ProjectShowcase = await prisma.projectShowcase.create({
     *   data: {
     *     // ... data to create a ProjectShowcase
     *   }
     * })
     * 
     */
    create<T extends ProjectShowcaseCreateArgs>(args: SelectSubset<T, ProjectShowcaseCreateArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectShowcases.
     * @param {ProjectShowcaseCreateManyArgs} args - Arguments to create many ProjectShowcases.
     * @example
     * // Create many ProjectShowcases
     * const projectShowcase = await prisma.projectShowcase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectShowcaseCreateManyArgs>(args?: SelectSubset<T, ProjectShowcaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectShowcases and returns the data saved in the database.
     * @param {ProjectShowcaseCreateManyAndReturnArgs} args - Arguments to create many ProjectShowcases.
     * @example
     * // Create many ProjectShowcases
     * const projectShowcase = await prisma.projectShowcase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectShowcases and only return the `id`
     * const projectShowcaseWithIdOnly = await prisma.projectShowcase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectShowcaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectShowcaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectShowcase.
     * @param {ProjectShowcaseDeleteArgs} args - Arguments to delete one ProjectShowcase.
     * @example
     * // Delete one ProjectShowcase
     * const ProjectShowcase = await prisma.projectShowcase.delete({
     *   where: {
     *     // ... filter to delete one ProjectShowcase
     *   }
     * })
     * 
     */
    delete<T extends ProjectShowcaseDeleteArgs>(args: SelectSubset<T, ProjectShowcaseDeleteArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectShowcase.
     * @param {ProjectShowcaseUpdateArgs} args - Arguments to update one ProjectShowcase.
     * @example
     * // Update one ProjectShowcase
     * const projectShowcase = await prisma.projectShowcase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectShowcaseUpdateArgs>(args: SelectSubset<T, ProjectShowcaseUpdateArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectShowcases.
     * @param {ProjectShowcaseDeleteManyArgs} args - Arguments to filter ProjectShowcases to delete.
     * @example
     * // Delete a few ProjectShowcases
     * const { count } = await prisma.projectShowcase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectShowcaseDeleteManyArgs>(args?: SelectSubset<T, ProjectShowcaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectShowcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectShowcaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectShowcases
     * const projectShowcase = await prisma.projectShowcase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectShowcaseUpdateManyArgs>(args: SelectSubset<T, ProjectShowcaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectShowcases and returns the data updated in the database.
     * @param {ProjectShowcaseUpdateManyAndReturnArgs} args - Arguments to update many ProjectShowcases.
     * @example
     * // Update many ProjectShowcases
     * const projectShowcase = await prisma.projectShowcase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectShowcases and only return the `id`
     * const projectShowcaseWithIdOnly = await prisma.projectShowcase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectShowcaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectShowcaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectShowcase.
     * @param {ProjectShowcaseUpsertArgs} args - Arguments to update or create a ProjectShowcase.
     * @example
     * // Update or create a ProjectShowcase
     * const projectShowcase = await prisma.projectShowcase.upsert({
     *   create: {
     *     // ... data to create a ProjectShowcase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectShowcase we want to update
     *   }
     * })
     */
    upsert<T extends ProjectShowcaseUpsertArgs>(args: SelectSubset<T, ProjectShowcaseUpsertArgs<ExtArgs>>): Prisma__ProjectShowcaseClient<$Result.GetResult<Prisma.$ProjectShowcasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectShowcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectShowcaseCountArgs} args - Arguments to filter ProjectShowcases to count.
     * @example
     * // Count the number of ProjectShowcases
     * const count = await prisma.projectShowcase.count({
     *   where: {
     *     // ... the filter for the ProjectShowcases we want to count
     *   }
     * })
    **/
    count<T extends ProjectShowcaseCountArgs>(
      args?: Subset<T, ProjectShowcaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectShowcaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectShowcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectShowcaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectShowcaseAggregateArgs>(args: Subset<T, ProjectShowcaseAggregateArgs>): Prisma.PrismaPromise<GetProjectShowcaseAggregateType<T>>

    /**
     * Group by ProjectShowcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectShowcaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectShowcaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectShowcaseGroupByArgs['orderBy'] }
        : { orderBy?: ProjectShowcaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectShowcaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectShowcaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectShowcase model
   */
  readonly fields: ProjectShowcaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectShowcase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectShowcaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectShowcase model
   */
  interface ProjectShowcaseFieldRefs {
    readonly id: FieldRef<"ProjectShowcase", 'String'>
    readonly title: FieldRef<"ProjectShowcase", 'String'>
    readonly description: FieldRef<"ProjectShowcase", 'String'>
    readonly github_link: FieldRef<"ProjectShowcase", 'String'>
    readonly deployed_link: FieldRef<"ProjectShowcase", 'String'>
    readonly resource_link: FieldRef<"ProjectShowcase", 'String[]'>
    readonly images: FieldRef<"ProjectShowcase", 'String[]'>
    readonly userId: FieldRef<"ProjectShowcase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectShowcase findUnique
   */
  export type ProjectShowcaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectShowcase to fetch.
     */
    where: ProjectShowcaseWhereUniqueInput
  }

  /**
   * ProjectShowcase findUniqueOrThrow
   */
  export type ProjectShowcaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectShowcase to fetch.
     */
    where: ProjectShowcaseWhereUniqueInput
  }

  /**
   * ProjectShowcase findFirst
   */
  export type ProjectShowcaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectShowcase to fetch.
     */
    where?: ProjectShowcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectShowcases to fetch.
     */
    orderBy?: ProjectShowcaseOrderByWithRelationInput | ProjectShowcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectShowcases.
     */
    cursor?: ProjectShowcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectShowcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectShowcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectShowcases.
     */
    distinct?: ProjectShowcaseScalarFieldEnum | ProjectShowcaseScalarFieldEnum[]
  }

  /**
   * ProjectShowcase findFirstOrThrow
   */
  export type ProjectShowcaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectShowcase to fetch.
     */
    where?: ProjectShowcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectShowcases to fetch.
     */
    orderBy?: ProjectShowcaseOrderByWithRelationInput | ProjectShowcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectShowcases.
     */
    cursor?: ProjectShowcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectShowcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectShowcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectShowcases.
     */
    distinct?: ProjectShowcaseScalarFieldEnum | ProjectShowcaseScalarFieldEnum[]
  }

  /**
   * ProjectShowcase findMany
   */
  export type ProjectShowcaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectShowcases to fetch.
     */
    where?: ProjectShowcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectShowcases to fetch.
     */
    orderBy?: ProjectShowcaseOrderByWithRelationInput | ProjectShowcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectShowcases.
     */
    cursor?: ProjectShowcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectShowcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectShowcases.
     */
    skip?: number
    distinct?: ProjectShowcaseScalarFieldEnum | ProjectShowcaseScalarFieldEnum[]
  }

  /**
   * ProjectShowcase create
   */
  export type ProjectShowcaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectShowcase.
     */
    data: XOR<ProjectShowcaseCreateInput, ProjectShowcaseUncheckedCreateInput>
  }

  /**
   * ProjectShowcase createMany
   */
  export type ProjectShowcaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectShowcases.
     */
    data: ProjectShowcaseCreateManyInput | ProjectShowcaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectShowcase createManyAndReturn
   */
  export type ProjectShowcaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectShowcases.
     */
    data: ProjectShowcaseCreateManyInput | ProjectShowcaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectShowcase update
   */
  export type ProjectShowcaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectShowcase.
     */
    data: XOR<ProjectShowcaseUpdateInput, ProjectShowcaseUncheckedUpdateInput>
    /**
     * Choose, which ProjectShowcase to update.
     */
    where: ProjectShowcaseWhereUniqueInput
  }

  /**
   * ProjectShowcase updateMany
   */
  export type ProjectShowcaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectShowcases.
     */
    data: XOR<ProjectShowcaseUpdateManyMutationInput, ProjectShowcaseUncheckedUpdateManyInput>
    /**
     * Filter which ProjectShowcases to update
     */
    where?: ProjectShowcaseWhereInput
    /**
     * Limit how many ProjectShowcases to update.
     */
    limit?: number
  }

  /**
   * ProjectShowcase updateManyAndReturn
   */
  export type ProjectShowcaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * The data used to update ProjectShowcases.
     */
    data: XOR<ProjectShowcaseUpdateManyMutationInput, ProjectShowcaseUncheckedUpdateManyInput>
    /**
     * Filter which ProjectShowcases to update
     */
    where?: ProjectShowcaseWhereInput
    /**
     * Limit how many ProjectShowcases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectShowcase upsert
   */
  export type ProjectShowcaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectShowcase to update in case it exists.
     */
    where: ProjectShowcaseWhereUniqueInput
    /**
     * In case the ProjectShowcase found by the `where` argument doesn't exist, create a new ProjectShowcase with this data.
     */
    create: XOR<ProjectShowcaseCreateInput, ProjectShowcaseUncheckedCreateInput>
    /**
     * In case the ProjectShowcase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectShowcaseUpdateInput, ProjectShowcaseUncheckedUpdateInput>
  }

  /**
   * ProjectShowcase delete
   */
  export type ProjectShowcaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
    /**
     * Filter which ProjectShowcase to delete.
     */
    where: ProjectShowcaseWhereUniqueInput
  }

  /**
   * ProjectShowcase deleteMany
   */
  export type ProjectShowcaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectShowcases to delete
     */
    where?: ProjectShowcaseWhereInput
    /**
     * Limit how many ProjectShowcases to delete.
     */
    limit?: number
  }

  /**
   * ProjectShowcase without action
   */
  export type ProjectShowcaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectShowcase
     */
    select?: ProjectShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectShowcase
     */
    omit?: ProjectShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectShowcaseInclude<ExtArgs> | null
  }


  /**
   * Model Collab
   */

  export type AggregateCollab = {
    _count: CollabCountAggregateOutputType | null
    _min: CollabMinAggregateOutputType | null
    _max: CollabMaxAggregateOutputType | null
  }

  export type CollabMinAggregateOutputType = {
    id: string | null
    mentorId: string | null
    title: string | null
    description: string | null
    status: $Enums.CollabStatus | null
  }

  export type CollabMaxAggregateOutputType = {
    id: string | null
    mentorId: string | null
    title: string | null
    description: string | null
    status: $Enums.CollabStatus | null
  }

  export type CollabCountAggregateOutputType = {
    id: number
    mentorId: number
    title: number
    description: number
    status: number
    _all: number
  }


  export type CollabMinAggregateInputType = {
    id?: true
    mentorId?: true
    title?: true
    description?: true
    status?: true
  }

  export type CollabMaxAggregateInputType = {
    id?: true
    mentorId?: true
    title?: true
    description?: true
    status?: true
  }

  export type CollabCountAggregateInputType = {
    id?: true
    mentorId?: true
    title?: true
    description?: true
    status?: true
    _all?: true
  }

  export type CollabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collab to aggregate.
     */
    where?: CollabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collabs to fetch.
     */
    orderBy?: CollabOrderByWithRelationInput | CollabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collabs
    **/
    _count?: true | CollabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollabMaxAggregateInputType
  }

  export type GetCollabAggregateType<T extends CollabAggregateArgs> = {
        [P in keyof T & keyof AggregateCollab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollab[P]>
      : GetScalarType<T[P], AggregateCollab[P]>
  }




  export type CollabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollabWhereInput
    orderBy?: CollabOrderByWithAggregationInput | CollabOrderByWithAggregationInput[]
    by: CollabScalarFieldEnum[] | CollabScalarFieldEnum
    having?: CollabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollabCountAggregateInputType | true
    _min?: CollabMinAggregateInputType
    _max?: CollabMaxAggregateInputType
  }

  export type CollabGroupByOutputType = {
    id: string
    mentorId: string
    title: string
    description: string
    status: $Enums.CollabStatus
    _count: CollabCountAggregateOutputType | null
    _min: CollabMinAggregateOutputType | null
    _max: CollabMaxAggregateOutputType | null
  }

  type GetCollabGroupByPayload<T extends CollabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollabGroupByOutputType[P]>
            : GetScalarType<T[P], CollabGroupByOutputType[P]>
        }
      >
    >


  export type CollabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
    CollabTasks?: boolean | Collab$CollabTasksArgs<ExtArgs>
    CollabSubmission?: boolean | Collab$CollabSubmissionArgs<ExtArgs>
    _count?: boolean | CollabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collab"]>

  export type CollabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collab"]>

  export type CollabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collab"]>

  export type CollabSelectScalar = {
    id?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
  }

  export type CollabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mentorId" | "title" | "description" | "status", ExtArgs["result"]["collab"]>
  export type CollabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
    CollabTasks?: boolean | Collab$CollabTasksArgs<ExtArgs>
    CollabSubmission?: boolean | Collab$CollabSubmissionArgs<ExtArgs>
    _count?: boolean | CollabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }
  export type CollabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }

  export type $CollabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collab"
    objects: {
      mentor: Prisma.$MentorProfilePayload<ExtArgs>
      CollabTasks: Prisma.$CollabTasksPayload<ExtArgs>[]
      CollabSubmission: Prisma.$CollabSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mentorId: string
      title: string
      description: string
      status: $Enums.CollabStatus
    }, ExtArgs["result"]["collab"]>
    composites: {}
  }

  type CollabGetPayload<S extends boolean | null | undefined | CollabDefaultArgs> = $Result.GetResult<Prisma.$CollabPayload, S>

  type CollabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollabCountAggregateInputType | true
    }

  export interface CollabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collab'], meta: { name: 'Collab' } }
    /**
     * Find zero or one Collab that matches the filter.
     * @param {CollabFindUniqueArgs} args - Arguments to find a Collab
     * @example
     * // Get one Collab
     * const collab = await prisma.collab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollabFindUniqueArgs>(args: SelectSubset<T, CollabFindUniqueArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollabFindUniqueOrThrowArgs} args - Arguments to find a Collab
     * @example
     * // Get one Collab
     * const collab = await prisma.collab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollabFindUniqueOrThrowArgs>(args: SelectSubset<T, CollabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabFindFirstArgs} args - Arguments to find a Collab
     * @example
     * // Get one Collab
     * const collab = await prisma.collab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollabFindFirstArgs>(args?: SelectSubset<T, CollabFindFirstArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabFindFirstOrThrowArgs} args - Arguments to find a Collab
     * @example
     * // Get one Collab
     * const collab = await prisma.collab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollabFindFirstOrThrowArgs>(args?: SelectSubset<T, CollabFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collabs
     * const collabs = await prisma.collab.findMany()
     * 
     * // Get first 10 Collabs
     * const collabs = await prisma.collab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collabWithIdOnly = await prisma.collab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollabFindManyArgs>(args?: SelectSubset<T, CollabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collab.
     * @param {CollabCreateArgs} args - Arguments to create a Collab.
     * @example
     * // Create one Collab
     * const Collab = await prisma.collab.create({
     *   data: {
     *     // ... data to create a Collab
     *   }
     * })
     * 
     */
    create<T extends CollabCreateArgs>(args: SelectSubset<T, CollabCreateArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collabs.
     * @param {CollabCreateManyArgs} args - Arguments to create many Collabs.
     * @example
     * // Create many Collabs
     * const collab = await prisma.collab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollabCreateManyArgs>(args?: SelectSubset<T, CollabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collabs and returns the data saved in the database.
     * @param {CollabCreateManyAndReturnArgs} args - Arguments to create many Collabs.
     * @example
     * // Create many Collabs
     * const collab = await prisma.collab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collabs and only return the `id`
     * const collabWithIdOnly = await prisma.collab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollabCreateManyAndReturnArgs>(args?: SelectSubset<T, CollabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collab.
     * @param {CollabDeleteArgs} args - Arguments to delete one Collab.
     * @example
     * // Delete one Collab
     * const Collab = await prisma.collab.delete({
     *   where: {
     *     // ... filter to delete one Collab
     *   }
     * })
     * 
     */
    delete<T extends CollabDeleteArgs>(args: SelectSubset<T, CollabDeleteArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collab.
     * @param {CollabUpdateArgs} args - Arguments to update one Collab.
     * @example
     * // Update one Collab
     * const collab = await prisma.collab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollabUpdateArgs>(args: SelectSubset<T, CollabUpdateArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collabs.
     * @param {CollabDeleteManyArgs} args - Arguments to filter Collabs to delete.
     * @example
     * // Delete a few Collabs
     * const { count } = await prisma.collab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollabDeleteManyArgs>(args?: SelectSubset<T, CollabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collabs
     * const collab = await prisma.collab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollabUpdateManyArgs>(args: SelectSubset<T, CollabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collabs and returns the data updated in the database.
     * @param {CollabUpdateManyAndReturnArgs} args - Arguments to update many Collabs.
     * @example
     * // Update many Collabs
     * const collab = await prisma.collab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collabs and only return the `id`
     * const collabWithIdOnly = await prisma.collab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollabUpdateManyAndReturnArgs>(args: SelectSubset<T, CollabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collab.
     * @param {CollabUpsertArgs} args - Arguments to update or create a Collab.
     * @example
     * // Update or create a Collab
     * const collab = await prisma.collab.upsert({
     *   create: {
     *     // ... data to create a Collab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collab we want to update
     *   }
     * })
     */
    upsert<T extends CollabUpsertArgs>(args: SelectSubset<T, CollabUpsertArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabCountArgs} args - Arguments to filter Collabs to count.
     * @example
     * // Count the number of Collabs
     * const count = await prisma.collab.count({
     *   where: {
     *     // ... the filter for the Collabs we want to count
     *   }
     * })
    **/
    count<T extends CollabCountArgs>(
      args?: Subset<T, CollabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollabAggregateArgs>(args: Subset<T, CollabAggregateArgs>): Prisma.PrismaPromise<GetCollabAggregateType<T>>

    /**
     * Group by Collab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollabGroupByArgs['orderBy'] }
        : { orderBy?: CollabGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collab model
   */
  readonly fields: CollabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor<T extends MentorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MentorProfileDefaultArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CollabTasks<T extends Collab$CollabTasksArgs<ExtArgs> = {}>(args?: Subset<T, Collab$CollabTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CollabSubmission<T extends Collab$CollabSubmissionArgs<ExtArgs> = {}>(args?: Subset<T, Collab$CollabSubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collab model
   */
  interface CollabFieldRefs {
    readonly id: FieldRef<"Collab", 'String'>
    readonly mentorId: FieldRef<"Collab", 'String'>
    readonly title: FieldRef<"Collab", 'String'>
    readonly description: FieldRef<"Collab", 'String'>
    readonly status: FieldRef<"Collab", 'CollabStatus'>
  }
    

  // Custom InputTypes
  /**
   * Collab findUnique
   */
  export type CollabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * Filter, which Collab to fetch.
     */
    where: CollabWhereUniqueInput
  }

  /**
   * Collab findUniqueOrThrow
   */
  export type CollabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * Filter, which Collab to fetch.
     */
    where: CollabWhereUniqueInput
  }

  /**
   * Collab findFirst
   */
  export type CollabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * Filter, which Collab to fetch.
     */
    where?: CollabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collabs to fetch.
     */
    orderBy?: CollabOrderByWithRelationInput | CollabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collabs.
     */
    cursor?: CollabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collabs.
     */
    distinct?: CollabScalarFieldEnum | CollabScalarFieldEnum[]
  }

  /**
   * Collab findFirstOrThrow
   */
  export type CollabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * Filter, which Collab to fetch.
     */
    where?: CollabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collabs to fetch.
     */
    orderBy?: CollabOrderByWithRelationInput | CollabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collabs.
     */
    cursor?: CollabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collabs.
     */
    distinct?: CollabScalarFieldEnum | CollabScalarFieldEnum[]
  }

  /**
   * Collab findMany
   */
  export type CollabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * Filter, which Collabs to fetch.
     */
    where?: CollabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collabs to fetch.
     */
    orderBy?: CollabOrderByWithRelationInput | CollabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collabs.
     */
    cursor?: CollabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collabs.
     */
    skip?: number
    distinct?: CollabScalarFieldEnum | CollabScalarFieldEnum[]
  }

  /**
   * Collab create
   */
  export type CollabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * The data needed to create a Collab.
     */
    data: XOR<CollabCreateInput, CollabUncheckedCreateInput>
  }

  /**
   * Collab createMany
   */
  export type CollabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collabs.
     */
    data: CollabCreateManyInput | CollabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collab createManyAndReturn
   */
  export type CollabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * The data used to create many Collabs.
     */
    data: CollabCreateManyInput | CollabCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collab update
   */
  export type CollabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * The data needed to update a Collab.
     */
    data: XOR<CollabUpdateInput, CollabUncheckedUpdateInput>
    /**
     * Choose, which Collab to update.
     */
    where: CollabWhereUniqueInput
  }

  /**
   * Collab updateMany
   */
  export type CollabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collabs.
     */
    data: XOR<CollabUpdateManyMutationInput, CollabUncheckedUpdateManyInput>
    /**
     * Filter which Collabs to update
     */
    where?: CollabWhereInput
    /**
     * Limit how many Collabs to update.
     */
    limit?: number
  }

  /**
   * Collab updateManyAndReturn
   */
  export type CollabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * The data used to update Collabs.
     */
    data: XOR<CollabUpdateManyMutationInput, CollabUncheckedUpdateManyInput>
    /**
     * Filter which Collabs to update
     */
    where?: CollabWhereInput
    /**
     * Limit how many Collabs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collab upsert
   */
  export type CollabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * The filter to search for the Collab to update in case it exists.
     */
    where: CollabWhereUniqueInput
    /**
     * In case the Collab found by the `where` argument doesn't exist, create a new Collab with this data.
     */
    create: XOR<CollabCreateInput, CollabUncheckedCreateInput>
    /**
     * In case the Collab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollabUpdateInput, CollabUncheckedUpdateInput>
  }

  /**
   * Collab delete
   */
  export type CollabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
    /**
     * Filter which Collab to delete.
     */
    where: CollabWhereUniqueInput
  }

  /**
   * Collab deleteMany
   */
  export type CollabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collabs to delete
     */
    where?: CollabWhereInput
    /**
     * Limit how many Collabs to delete.
     */
    limit?: number
  }

  /**
   * Collab.CollabTasks
   */
  export type Collab$CollabTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    where?: CollabTasksWhereInput
    orderBy?: CollabTasksOrderByWithRelationInput | CollabTasksOrderByWithRelationInput[]
    cursor?: CollabTasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollabTasksScalarFieldEnum | CollabTasksScalarFieldEnum[]
  }

  /**
   * Collab.CollabSubmission
   */
  export type Collab$CollabSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    where?: CollabSubmissionWhereInput
    orderBy?: CollabSubmissionOrderByWithRelationInput | CollabSubmissionOrderByWithRelationInput[]
    cursor?: CollabSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollabSubmissionScalarFieldEnum | CollabSubmissionScalarFieldEnum[]
  }

  /**
   * Collab without action
   */
  export type CollabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collab
     */
    select?: CollabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collab
     */
    omit?: CollabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabInclude<ExtArgs> | null
  }


  /**
   * Model CollabTasks
   */

  export type AggregateCollabTasks = {
    _count: CollabTasksCountAggregateOutputType | null
    _min: CollabTasksMinAggregateOutputType | null
    _max: CollabTasksMaxAggregateOutputType | null
  }

  export type CollabTasksMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    collabId: string | null
    menteeId: string | null
    status: $Enums.CollabStatus | null
  }

  export type CollabTasksMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    collabId: string | null
    menteeId: string | null
    status: $Enums.CollabStatus | null
  }

  export type CollabTasksCountAggregateOutputType = {
    id: number
    title: number
    description: number
    collabId: number
    menteeId: number
    status: number
    _all: number
  }


  export type CollabTasksMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    collabId?: true
    menteeId?: true
    status?: true
  }

  export type CollabTasksMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    collabId?: true
    menteeId?: true
    status?: true
  }

  export type CollabTasksCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    collabId?: true
    menteeId?: true
    status?: true
    _all?: true
  }

  export type CollabTasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollabTasks to aggregate.
     */
    where?: CollabTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollabTasks to fetch.
     */
    orderBy?: CollabTasksOrderByWithRelationInput | CollabTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollabTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollabTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollabTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollabTasks
    **/
    _count?: true | CollabTasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollabTasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollabTasksMaxAggregateInputType
  }

  export type GetCollabTasksAggregateType<T extends CollabTasksAggregateArgs> = {
        [P in keyof T & keyof AggregateCollabTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollabTasks[P]>
      : GetScalarType<T[P], AggregateCollabTasks[P]>
  }




  export type CollabTasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollabTasksWhereInput
    orderBy?: CollabTasksOrderByWithAggregationInput | CollabTasksOrderByWithAggregationInput[]
    by: CollabTasksScalarFieldEnum[] | CollabTasksScalarFieldEnum
    having?: CollabTasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollabTasksCountAggregateInputType | true
    _min?: CollabTasksMinAggregateInputType
    _max?: CollabTasksMaxAggregateInputType
  }

  export type CollabTasksGroupByOutputType = {
    id: string
    title: string
    description: string
    collabId: string
    menteeId: string
    status: $Enums.CollabStatus
    _count: CollabTasksCountAggregateOutputType | null
    _min: CollabTasksMinAggregateOutputType | null
    _max: CollabTasksMaxAggregateOutputType | null
  }

  type GetCollabTasksGroupByPayload<T extends CollabTasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollabTasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollabTasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollabTasksGroupByOutputType[P]>
            : GetScalarType<T[P], CollabTasksGroupByOutputType[P]>
        }
      >
    >


  export type CollabTasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    collabId?: boolean
    menteeId?: boolean
    status?: boolean
    collab?: boolean | CollabDefaultArgs<ExtArgs>
    mentee?: boolean | MenteeProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collabTasks"]>

  export type CollabTasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    collabId?: boolean
    menteeId?: boolean
    status?: boolean
    collab?: boolean | CollabDefaultArgs<ExtArgs>
    mentee?: boolean | MenteeProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collabTasks"]>

  export type CollabTasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    collabId?: boolean
    menteeId?: boolean
    status?: boolean
    collab?: boolean | CollabDefaultArgs<ExtArgs>
    mentee?: boolean | MenteeProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collabTasks"]>

  export type CollabTasksSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    collabId?: boolean
    menteeId?: boolean
    status?: boolean
  }

  export type CollabTasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "collabId" | "menteeId" | "status", ExtArgs["result"]["collabTasks"]>
  export type CollabTasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collab?: boolean | CollabDefaultArgs<ExtArgs>
    mentee?: boolean | MenteeProfileDefaultArgs<ExtArgs>
  }
  export type CollabTasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collab?: boolean | CollabDefaultArgs<ExtArgs>
    mentee?: boolean | MenteeProfileDefaultArgs<ExtArgs>
  }
  export type CollabTasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collab?: boolean | CollabDefaultArgs<ExtArgs>
    mentee?: boolean | MenteeProfileDefaultArgs<ExtArgs>
  }

  export type $CollabTasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollabTasks"
    objects: {
      collab: Prisma.$CollabPayload<ExtArgs>
      mentee: Prisma.$MenteeProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      collabId: string
      menteeId: string
      status: $Enums.CollabStatus
    }, ExtArgs["result"]["collabTasks"]>
    composites: {}
  }

  type CollabTasksGetPayload<S extends boolean | null | undefined | CollabTasksDefaultArgs> = $Result.GetResult<Prisma.$CollabTasksPayload, S>

  type CollabTasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollabTasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollabTasksCountAggregateInputType | true
    }

  export interface CollabTasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollabTasks'], meta: { name: 'CollabTasks' } }
    /**
     * Find zero or one CollabTasks that matches the filter.
     * @param {CollabTasksFindUniqueArgs} args - Arguments to find a CollabTasks
     * @example
     * // Get one CollabTasks
     * const collabTasks = await prisma.collabTasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollabTasksFindUniqueArgs>(args: SelectSubset<T, CollabTasksFindUniqueArgs<ExtArgs>>): Prisma__CollabTasksClient<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollabTasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollabTasksFindUniqueOrThrowArgs} args - Arguments to find a CollabTasks
     * @example
     * // Get one CollabTasks
     * const collabTasks = await prisma.collabTasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollabTasksFindUniqueOrThrowArgs>(args: SelectSubset<T, CollabTasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollabTasksClient<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollabTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabTasksFindFirstArgs} args - Arguments to find a CollabTasks
     * @example
     * // Get one CollabTasks
     * const collabTasks = await prisma.collabTasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollabTasksFindFirstArgs>(args?: SelectSubset<T, CollabTasksFindFirstArgs<ExtArgs>>): Prisma__CollabTasksClient<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollabTasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabTasksFindFirstOrThrowArgs} args - Arguments to find a CollabTasks
     * @example
     * // Get one CollabTasks
     * const collabTasks = await prisma.collabTasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollabTasksFindFirstOrThrowArgs>(args?: SelectSubset<T, CollabTasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollabTasksClient<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollabTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabTasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollabTasks
     * const collabTasks = await prisma.collabTasks.findMany()
     * 
     * // Get first 10 CollabTasks
     * const collabTasks = await prisma.collabTasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collabTasksWithIdOnly = await prisma.collabTasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollabTasksFindManyArgs>(args?: SelectSubset<T, CollabTasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollabTasks.
     * @param {CollabTasksCreateArgs} args - Arguments to create a CollabTasks.
     * @example
     * // Create one CollabTasks
     * const CollabTasks = await prisma.collabTasks.create({
     *   data: {
     *     // ... data to create a CollabTasks
     *   }
     * })
     * 
     */
    create<T extends CollabTasksCreateArgs>(args: SelectSubset<T, CollabTasksCreateArgs<ExtArgs>>): Prisma__CollabTasksClient<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollabTasks.
     * @param {CollabTasksCreateManyArgs} args - Arguments to create many CollabTasks.
     * @example
     * // Create many CollabTasks
     * const collabTasks = await prisma.collabTasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollabTasksCreateManyArgs>(args?: SelectSubset<T, CollabTasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollabTasks and returns the data saved in the database.
     * @param {CollabTasksCreateManyAndReturnArgs} args - Arguments to create many CollabTasks.
     * @example
     * // Create many CollabTasks
     * const collabTasks = await prisma.collabTasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollabTasks and only return the `id`
     * const collabTasksWithIdOnly = await prisma.collabTasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollabTasksCreateManyAndReturnArgs>(args?: SelectSubset<T, CollabTasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollabTasks.
     * @param {CollabTasksDeleteArgs} args - Arguments to delete one CollabTasks.
     * @example
     * // Delete one CollabTasks
     * const CollabTasks = await prisma.collabTasks.delete({
     *   where: {
     *     // ... filter to delete one CollabTasks
     *   }
     * })
     * 
     */
    delete<T extends CollabTasksDeleteArgs>(args: SelectSubset<T, CollabTasksDeleteArgs<ExtArgs>>): Prisma__CollabTasksClient<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollabTasks.
     * @param {CollabTasksUpdateArgs} args - Arguments to update one CollabTasks.
     * @example
     * // Update one CollabTasks
     * const collabTasks = await prisma.collabTasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollabTasksUpdateArgs>(args: SelectSubset<T, CollabTasksUpdateArgs<ExtArgs>>): Prisma__CollabTasksClient<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollabTasks.
     * @param {CollabTasksDeleteManyArgs} args - Arguments to filter CollabTasks to delete.
     * @example
     * // Delete a few CollabTasks
     * const { count } = await prisma.collabTasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollabTasksDeleteManyArgs>(args?: SelectSubset<T, CollabTasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollabTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabTasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollabTasks
     * const collabTasks = await prisma.collabTasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollabTasksUpdateManyArgs>(args: SelectSubset<T, CollabTasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollabTasks and returns the data updated in the database.
     * @param {CollabTasksUpdateManyAndReturnArgs} args - Arguments to update many CollabTasks.
     * @example
     * // Update many CollabTasks
     * const collabTasks = await prisma.collabTasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollabTasks and only return the `id`
     * const collabTasksWithIdOnly = await prisma.collabTasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollabTasksUpdateManyAndReturnArgs>(args: SelectSubset<T, CollabTasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollabTasks.
     * @param {CollabTasksUpsertArgs} args - Arguments to update or create a CollabTasks.
     * @example
     * // Update or create a CollabTasks
     * const collabTasks = await prisma.collabTasks.upsert({
     *   create: {
     *     // ... data to create a CollabTasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollabTasks we want to update
     *   }
     * })
     */
    upsert<T extends CollabTasksUpsertArgs>(args: SelectSubset<T, CollabTasksUpsertArgs<ExtArgs>>): Prisma__CollabTasksClient<$Result.GetResult<Prisma.$CollabTasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollabTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabTasksCountArgs} args - Arguments to filter CollabTasks to count.
     * @example
     * // Count the number of CollabTasks
     * const count = await prisma.collabTasks.count({
     *   where: {
     *     // ... the filter for the CollabTasks we want to count
     *   }
     * })
    **/
    count<T extends CollabTasksCountArgs>(
      args?: Subset<T, CollabTasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollabTasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollabTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabTasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollabTasksAggregateArgs>(args: Subset<T, CollabTasksAggregateArgs>): Prisma.PrismaPromise<GetCollabTasksAggregateType<T>>

    /**
     * Group by CollabTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabTasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollabTasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollabTasksGroupByArgs['orderBy'] }
        : { orderBy?: CollabTasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollabTasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollabTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollabTasks model
   */
  readonly fields: CollabTasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollabTasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollabTasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collab<T extends CollabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollabDefaultArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentee<T extends MenteeProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenteeProfileDefaultArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollabTasks model
   */
  interface CollabTasksFieldRefs {
    readonly id: FieldRef<"CollabTasks", 'String'>
    readonly title: FieldRef<"CollabTasks", 'String'>
    readonly description: FieldRef<"CollabTasks", 'String'>
    readonly collabId: FieldRef<"CollabTasks", 'String'>
    readonly menteeId: FieldRef<"CollabTasks", 'String'>
    readonly status: FieldRef<"CollabTasks", 'CollabStatus'>
  }
    

  // Custom InputTypes
  /**
   * CollabTasks findUnique
   */
  export type CollabTasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * Filter, which CollabTasks to fetch.
     */
    where: CollabTasksWhereUniqueInput
  }

  /**
   * CollabTasks findUniqueOrThrow
   */
  export type CollabTasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * Filter, which CollabTasks to fetch.
     */
    where: CollabTasksWhereUniqueInput
  }

  /**
   * CollabTasks findFirst
   */
  export type CollabTasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * Filter, which CollabTasks to fetch.
     */
    where?: CollabTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollabTasks to fetch.
     */
    orderBy?: CollabTasksOrderByWithRelationInput | CollabTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollabTasks.
     */
    cursor?: CollabTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollabTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollabTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollabTasks.
     */
    distinct?: CollabTasksScalarFieldEnum | CollabTasksScalarFieldEnum[]
  }

  /**
   * CollabTasks findFirstOrThrow
   */
  export type CollabTasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * Filter, which CollabTasks to fetch.
     */
    where?: CollabTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollabTasks to fetch.
     */
    orderBy?: CollabTasksOrderByWithRelationInput | CollabTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollabTasks.
     */
    cursor?: CollabTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollabTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollabTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollabTasks.
     */
    distinct?: CollabTasksScalarFieldEnum | CollabTasksScalarFieldEnum[]
  }

  /**
   * CollabTasks findMany
   */
  export type CollabTasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * Filter, which CollabTasks to fetch.
     */
    where?: CollabTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollabTasks to fetch.
     */
    orderBy?: CollabTasksOrderByWithRelationInput | CollabTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollabTasks.
     */
    cursor?: CollabTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollabTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollabTasks.
     */
    skip?: number
    distinct?: CollabTasksScalarFieldEnum | CollabTasksScalarFieldEnum[]
  }

  /**
   * CollabTasks create
   */
  export type CollabTasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * The data needed to create a CollabTasks.
     */
    data: XOR<CollabTasksCreateInput, CollabTasksUncheckedCreateInput>
  }

  /**
   * CollabTasks createMany
   */
  export type CollabTasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollabTasks.
     */
    data: CollabTasksCreateManyInput | CollabTasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollabTasks createManyAndReturn
   */
  export type CollabTasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * The data used to create many CollabTasks.
     */
    data: CollabTasksCreateManyInput | CollabTasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollabTasks update
   */
  export type CollabTasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * The data needed to update a CollabTasks.
     */
    data: XOR<CollabTasksUpdateInput, CollabTasksUncheckedUpdateInput>
    /**
     * Choose, which CollabTasks to update.
     */
    where: CollabTasksWhereUniqueInput
  }

  /**
   * CollabTasks updateMany
   */
  export type CollabTasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollabTasks.
     */
    data: XOR<CollabTasksUpdateManyMutationInput, CollabTasksUncheckedUpdateManyInput>
    /**
     * Filter which CollabTasks to update
     */
    where?: CollabTasksWhereInput
    /**
     * Limit how many CollabTasks to update.
     */
    limit?: number
  }

  /**
   * CollabTasks updateManyAndReturn
   */
  export type CollabTasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * The data used to update CollabTasks.
     */
    data: XOR<CollabTasksUpdateManyMutationInput, CollabTasksUncheckedUpdateManyInput>
    /**
     * Filter which CollabTasks to update
     */
    where?: CollabTasksWhereInput
    /**
     * Limit how many CollabTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollabTasks upsert
   */
  export type CollabTasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * The filter to search for the CollabTasks to update in case it exists.
     */
    where: CollabTasksWhereUniqueInput
    /**
     * In case the CollabTasks found by the `where` argument doesn't exist, create a new CollabTasks with this data.
     */
    create: XOR<CollabTasksCreateInput, CollabTasksUncheckedCreateInput>
    /**
     * In case the CollabTasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollabTasksUpdateInput, CollabTasksUncheckedUpdateInput>
  }

  /**
   * CollabTasks delete
   */
  export type CollabTasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
    /**
     * Filter which CollabTasks to delete.
     */
    where: CollabTasksWhereUniqueInput
  }

  /**
   * CollabTasks deleteMany
   */
  export type CollabTasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollabTasks to delete
     */
    where?: CollabTasksWhereInput
    /**
     * Limit how many CollabTasks to delete.
     */
    limit?: number
  }

  /**
   * CollabTasks without action
   */
  export type CollabTasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabTasks
     */
    select?: CollabTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabTasks
     */
    omit?: CollabTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabTasksInclude<ExtArgs> | null
  }


  /**
   * Model CollabSubmission
   */

  export type AggregateCollabSubmission = {
    _count: CollabSubmissionCountAggregateOutputType | null
    _min: CollabSubmissionMinAggregateOutputType | null
    _max: CollabSubmissionMaxAggregateOutputType | null
  }

  export type CollabSubmissionMinAggregateOutputType = {
    id: string | null
    collabId: string | null
    github_link: string | null
  }

  export type CollabSubmissionMaxAggregateOutputType = {
    id: string | null
    collabId: string | null
    github_link: string | null
  }

  export type CollabSubmissionCountAggregateOutputType = {
    id: number
    collabId: number
    github_link: number
    resource_link: number
    _all: number
  }


  export type CollabSubmissionMinAggregateInputType = {
    id?: true
    collabId?: true
    github_link?: true
  }

  export type CollabSubmissionMaxAggregateInputType = {
    id?: true
    collabId?: true
    github_link?: true
  }

  export type CollabSubmissionCountAggregateInputType = {
    id?: true
    collabId?: true
    github_link?: true
    resource_link?: true
    _all?: true
  }

  export type CollabSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollabSubmission to aggregate.
     */
    where?: CollabSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollabSubmissions to fetch.
     */
    orderBy?: CollabSubmissionOrderByWithRelationInput | CollabSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollabSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollabSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollabSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollabSubmissions
    **/
    _count?: true | CollabSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollabSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollabSubmissionMaxAggregateInputType
  }

  export type GetCollabSubmissionAggregateType<T extends CollabSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollabSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollabSubmission[P]>
      : GetScalarType<T[P], AggregateCollabSubmission[P]>
  }




  export type CollabSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollabSubmissionWhereInput
    orderBy?: CollabSubmissionOrderByWithAggregationInput | CollabSubmissionOrderByWithAggregationInput[]
    by: CollabSubmissionScalarFieldEnum[] | CollabSubmissionScalarFieldEnum
    having?: CollabSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollabSubmissionCountAggregateInputType | true
    _min?: CollabSubmissionMinAggregateInputType
    _max?: CollabSubmissionMaxAggregateInputType
  }

  export type CollabSubmissionGroupByOutputType = {
    id: string
    collabId: string
    github_link: string
    resource_link: string[]
    _count: CollabSubmissionCountAggregateOutputType | null
    _min: CollabSubmissionMinAggregateOutputType | null
    _max: CollabSubmissionMaxAggregateOutputType | null
  }

  type GetCollabSubmissionGroupByPayload<T extends CollabSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollabSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollabSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollabSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], CollabSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type CollabSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collabId?: boolean
    github_link?: boolean
    resource_link?: boolean
    collab?: boolean | CollabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collabSubmission"]>

  export type CollabSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collabId?: boolean
    github_link?: boolean
    resource_link?: boolean
    collab?: boolean | CollabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collabSubmission"]>

  export type CollabSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collabId?: boolean
    github_link?: boolean
    resource_link?: boolean
    collab?: boolean | CollabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collabSubmission"]>

  export type CollabSubmissionSelectScalar = {
    id?: boolean
    collabId?: boolean
    github_link?: boolean
    resource_link?: boolean
  }

  export type CollabSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collabId" | "github_link" | "resource_link", ExtArgs["result"]["collabSubmission"]>
  export type CollabSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collab?: boolean | CollabDefaultArgs<ExtArgs>
  }
  export type CollabSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collab?: boolean | CollabDefaultArgs<ExtArgs>
  }
  export type CollabSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collab?: boolean | CollabDefaultArgs<ExtArgs>
  }

  export type $CollabSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollabSubmission"
    objects: {
      collab: Prisma.$CollabPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collabId: string
      github_link: string
      resource_link: string[]
    }, ExtArgs["result"]["collabSubmission"]>
    composites: {}
  }

  type CollabSubmissionGetPayload<S extends boolean | null | undefined | CollabSubmissionDefaultArgs> = $Result.GetResult<Prisma.$CollabSubmissionPayload, S>

  type CollabSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollabSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollabSubmissionCountAggregateInputType | true
    }

  export interface CollabSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollabSubmission'], meta: { name: 'CollabSubmission' } }
    /**
     * Find zero or one CollabSubmission that matches the filter.
     * @param {CollabSubmissionFindUniqueArgs} args - Arguments to find a CollabSubmission
     * @example
     * // Get one CollabSubmission
     * const collabSubmission = await prisma.collabSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollabSubmissionFindUniqueArgs>(args: SelectSubset<T, CollabSubmissionFindUniqueArgs<ExtArgs>>): Prisma__CollabSubmissionClient<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollabSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollabSubmissionFindUniqueOrThrowArgs} args - Arguments to find a CollabSubmission
     * @example
     * // Get one CollabSubmission
     * const collabSubmission = await prisma.collabSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollabSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollabSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollabSubmissionClient<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollabSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabSubmissionFindFirstArgs} args - Arguments to find a CollabSubmission
     * @example
     * // Get one CollabSubmission
     * const collabSubmission = await prisma.collabSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollabSubmissionFindFirstArgs>(args?: SelectSubset<T, CollabSubmissionFindFirstArgs<ExtArgs>>): Prisma__CollabSubmissionClient<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollabSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabSubmissionFindFirstOrThrowArgs} args - Arguments to find a CollabSubmission
     * @example
     * // Get one CollabSubmission
     * const collabSubmission = await prisma.collabSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollabSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollabSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollabSubmissionClient<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollabSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollabSubmissions
     * const collabSubmissions = await prisma.collabSubmission.findMany()
     * 
     * // Get first 10 CollabSubmissions
     * const collabSubmissions = await prisma.collabSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collabSubmissionWithIdOnly = await prisma.collabSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollabSubmissionFindManyArgs>(args?: SelectSubset<T, CollabSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollabSubmission.
     * @param {CollabSubmissionCreateArgs} args - Arguments to create a CollabSubmission.
     * @example
     * // Create one CollabSubmission
     * const CollabSubmission = await prisma.collabSubmission.create({
     *   data: {
     *     // ... data to create a CollabSubmission
     *   }
     * })
     * 
     */
    create<T extends CollabSubmissionCreateArgs>(args: SelectSubset<T, CollabSubmissionCreateArgs<ExtArgs>>): Prisma__CollabSubmissionClient<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollabSubmissions.
     * @param {CollabSubmissionCreateManyArgs} args - Arguments to create many CollabSubmissions.
     * @example
     * // Create many CollabSubmissions
     * const collabSubmission = await prisma.collabSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollabSubmissionCreateManyArgs>(args?: SelectSubset<T, CollabSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollabSubmissions and returns the data saved in the database.
     * @param {CollabSubmissionCreateManyAndReturnArgs} args - Arguments to create many CollabSubmissions.
     * @example
     * // Create many CollabSubmissions
     * const collabSubmission = await prisma.collabSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollabSubmissions and only return the `id`
     * const collabSubmissionWithIdOnly = await prisma.collabSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollabSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollabSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollabSubmission.
     * @param {CollabSubmissionDeleteArgs} args - Arguments to delete one CollabSubmission.
     * @example
     * // Delete one CollabSubmission
     * const CollabSubmission = await prisma.collabSubmission.delete({
     *   where: {
     *     // ... filter to delete one CollabSubmission
     *   }
     * })
     * 
     */
    delete<T extends CollabSubmissionDeleteArgs>(args: SelectSubset<T, CollabSubmissionDeleteArgs<ExtArgs>>): Prisma__CollabSubmissionClient<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollabSubmission.
     * @param {CollabSubmissionUpdateArgs} args - Arguments to update one CollabSubmission.
     * @example
     * // Update one CollabSubmission
     * const collabSubmission = await prisma.collabSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollabSubmissionUpdateArgs>(args: SelectSubset<T, CollabSubmissionUpdateArgs<ExtArgs>>): Prisma__CollabSubmissionClient<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollabSubmissions.
     * @param {CollabSubmissionDeleteManyArgs} args - Arguments to filter CollabSubmissions to delete.
     * @example
     * // Delete a few CollabSubmissions
     * const { count } = await prisma.collabSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollabSubmissionDeleteManyArgs>(args?: SelectSubset<T, CollabSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollabSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollabSubmissions
     * const collabSubmission = await prisma.collabSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollabSubmissionUpdateManyArgs>(args: SelectSubset<T, CollabSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollabSubmissions and returns the data updated in the database.
     * @param {CollabSubmissionUpdateManyAndReturnArgs} args - Arguments to update many CollabSubmissions.
     * @example
     * // Update many CollabSubmissions
     * const collabSubmission = await prisma.collabSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollabSubmissions and only return the `id`
     * const collabSubmissionWithIdOnly = await prisma.collabSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollabSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, CollabSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollabSubmission.
     * @param {CollabSubmissionUpsertArgs} args - Arguments to update or create a CollabSubmission.
     * @example
     * // Update or create a CollabSubmission
     * const collabSubmission = await prisma.collabSubmission.upsert({
     *   create: {
     *     // ... data to create a CollabSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollabSubmission we want to update
     *   }
     * })
     */
    upsert<T extends CollabSubmissionUpsertArgs>(args: SelectSubset<T, CollabSubmissionUpsertArgs<ExtArgs>>): Prisma__CollabSubmissionClient<$Result.GetResult<Prisma.$CollabSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollabSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabSubmissionCountArgs} args - Arguments to filter CollabSubmissions to count.
     * @example
     * // Count the number of CollabSubmissions
     * const count = await prisma.collabSubmission.count({
     *   where: {
     *     // ... the filter for the CollabSubmissions we want to count
     *   }
     * })
    **/
    count<T extends CollabSubmissionCountArgs>(
      args?: Subset<T, CollabSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollabSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollabSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollabSubmissionAggregateArgs>(args: Subset<T, CollabSubmissionAggregateArgs>): Prisma.PrismaPromise<GetCollabSubmissionAggregateType<T>>

    /**
     * Group by CollabSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollabSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollabSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollabSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: CollabSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollabSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollabSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollabSubmission model
   */
  readonly fields: CollabSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollabSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollabSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collab<T extends CollabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollabDefaultArgs<ExtArgs>>): Prisma__CollabClient<$Result.GetResult<Prisma.$CollabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollabSubmission model
   */
  interface CollabSubmissionFieldRefs {
    readonly id: FieldRef<"CollabSubmission", 'String'>
    readonly collabId: FieldRef<"CollabSubmission", 'String'>
    readonly github_link: FieldRef<"CollabSubmission", 'String'>
    readonly resource_link: FieldRef<"CollabSubmission", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * CollabSubmission findUnique
   */
  export type CollabSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which CollabSubmission to fetch.
     */
    where: CollabSubmissionWhereUniqueInput
  }

  /**
   * CollabSubmission findUniqueOrThrow
   */
  export type CollabSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which CollabSubmission to fetch.
     */
    where: CollabSubmissionWhereUniqueInput
  }

  /**
   * CollabSubmission findFirst
   */
  export type CollabSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which CollabSubmission to fetch.
     */
    where?: CollabSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollabSubmissions to fetch.
     */
    orderBy?: CollabSubmissionOrderByWithRelationInput | CollabSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollabSubmissions.
     */
    cursor?: CollabSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollabSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollabSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollabSubmissions.
     */
    distinct?: CollabSubmissionScalarFieldEnum | CollabSubmissionScalarFieldEnum[]
  }

  /**
   * CollabSubmission findFirstOrThrow
   */
  export type CollabSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which CollabSubmission to fetch.
     */
    where?: CollabSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollabSubmissions to fetch.
     */
    orderBy?: CollabSubmissionOrderByWithRelationInput | CollabSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollabSubmissions.
     */
    cursor?: CollabSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollabSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollabSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollabSubmissions.
     */
    distinct?: CollabSubmissionScalarFieldEnum | CollabSubmissionScalarFieldEnum[]
  }

  /**
   * CollabSubmission findMany
   */
  export type CollabSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which CollabSubmissions to fetch.
     */
    where?: CollabSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollabSubmissions to fetch.
     */
    orderBy?: CollabSubmissionOrderByWithRelationInput | CollabSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollabSubmissions.
     */
    cursor?: CollabSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollabSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollabSubmissions.
     */
    skip?: number
    distinct?: CollabSubmissionScalarFieldEnum | CollabSubmissionScalarFieldEnum[]
  }

  /**
   * CollabSubmission create
   */
  export type CollabSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a CollabSubmission.
     */
    data: XOR<CollabSubmissionCreateInput, CollabSubmissionUncheckedCreateInput>
  }

  /**
   * CollabSubmission createMany
   */
  export type CollabSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollabSubmissions.
     */
    data: CollabSubmissionCreateManyInput | CollabSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollabSubmission createManyAndReturn
   */
  export type CollabSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many CollabSubmissions.
     */
    data: CollabSubmissionCreateManyInput | CollabSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollabSubmission update
   */
  export type CollabSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a CollabSubmission.
     */
    data: XOR<CollabSubmissionUpdateInput, CollabSubmissionUncheckedUpdateInput>
    /**
     * Choose, which CollabSubmission to update.
     */
    where: CollabSubmissionWhereUniqueInput
  }

  /**
   * CollabSubmission updateMany
   */
  export type CollabSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollabSubmissions.
     */
    data: XOR<CollabSubmissionUpdateManyMutationInput, CollabSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which CollabSubmissions to update
     */
    where?: CollabSubmissionWhereInput
    /**
     * Limit how many CollabSubmissions to update.
     */
    limit?: number
  }

  /**
   * CollabSubmission updateManyAndReturn
   */
  export type CollabSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update CollabSubmissions.
     */
    data: XOR<CollabSubmissionUpdateManyMutationInput, CollabSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which CollabSubmissions to update
     */
    where?: CollabSubmissionWhereInput
    /**
     * Limit how many CollabSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollabSubmission upsert
   */
  export type CollabSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the CollabSubmission to update in case it exists.
     */
    where: CollabSubmissionWhereUniqueInput
    /**
     * In case the CollabSubmission found by the `where` argument doesn't exist, create a new CollabSubmission with this data.
     */
    create: XOR<CollabSubmissionCreateInput, CollabSubmissionUncheckedCreateInput>
    /**
     * In case the CollabSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollabSubmissionUpdateInput, CollabSubmissionUncheckedUpdateInput>
  }

  /**
   * CollabSubmission delete
   */
  export type CollabSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
    /**
     * Filter which CollabSubmission to delete.
     */
    where: CollabSubmissionWhereUniqueInput
  }

  /**
   * CollabSubmission deleteMany
   */
  export type CollabSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollabSubmissions to delete
     */
    where?: CollabSubmissionWhereInput
    /**
     * Limit how many CollabSubmissions to delete.
     */
    limit?: number
  }

  /**
   * CollabSubmission without action
   */
  export type CollabSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollabSubmission
     */
    select?: CollabSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollabSubmission
     */
    omit?: CollabSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollabSubmissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    role: 'role',
    isOnboarded: 'isOnboarded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MentorProfileScalarFieldEnum: {
    id: 'id',
    expertise: 'expertise',
    experience: 'experience',
    availability: 'availability',
    userId: 'userId'
  };

  export type MentorProfileScalarFieldEnum = (typeof MentorProfileScalarFieldEnum)[keyof typeof MentorProfileScalarFieldEnum]


  export const MenteeProfileScalarFieldEnum: {
    id: 'id',
    interests: 'interests',
    goals: 'goals',
    preferredSchedule: 'preferredSchedule',
    userId: 'userId'
  };

  export type MenteeProfileScalarFieldEnum = (typeof MenteeProfileScalarFieldEnum)[keyof typeof MenteeProfileScalarFieldEnum]


  export const ProjectShowcaseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    github_link: 'github_link',
    deployed_link: 'deployed_link',
    resource_link: 'resource_link',
    images: 'images',
    userId: 'userId'
  };

  export type ProjectShowcaseScalarFieldEnum = (typeof ProjectShowcaseScalarFieldEnum)[keyof typeof ProjectShowcaseScalarFieldEnum]


  export const CollabScalarFieldEnum: {
    id: 'id',
    mentorId: 'mentorId',
    title: 'title',
    description: 'description',
    status: 'status'
  };

  export type CollabScalarFieldEnum = (typeof CollabScalarFieldEnum)[keyof typeof CollabScalarFieldEnum]


  export const CollabTasksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    collabId: 'collabId',
    menteeId: 'menteeId',
    status: 'status'
  };

  export type CollabTasksScalarFieldEnum = (typeof CollabTasksScalarFieldEnum)[keyof typeof CollabTasksScalarFieldEnum]


  export const CollabSubmissionScalarFieldEnum: {
    id: 'id',
    collabId: 'collabId',
    github_link: 'github_link',
    resource_link: 'resource_link'
  };

  export type CollabSubmissionScalarFieldEnum = (typeof CollabSubmissionScalarFieldEnum)[keyof typeof CollabSubmissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CollabStatus'
   */
  export type EnumCollabStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollabStatus'>
    


  /**
   * Reference to a field of type 'CollabStatus[]'
   */
  export type ListEnumCollabStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollabStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isOnboarded?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    mentorProfile?: XOR<MentorProfileNullableScalarRelationFilter, MentorProfileWhereInput> | null
    menteeProfile?: XOR<MenteeProfileNullableScalarRelationFilter, MenteeProfileWhereInput> | null
    ProjectShowcase?: XOR<ProjectShowcaseNullableScalarRelationFilter, ProjectShowcaseWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mentorProfile?: MentorProfileOrderByWithRelationInput
    menteeProfile?: MenteeProfileOrderByWithRelationInput
    ProjectShowcase?: ProjectShowcaseOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isOnboarded?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    mentorProfile?: XOR<MentorProfileNullableScalarRelationFilter, MentorProfileWhereInput> | null
    menteeProfile?: XOR<MenteeProfileNullableScalarRelationFilter, MenteeProfileWhereInput> | null
    ProjectShowcase?: XOR<ProjectShowcaseNullableScalarRelationFilter, ProjectShowcaseWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    isOnboarded?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MentorProfileWhereInput = {
    AND?: MentorProfileWhereInput | MentorProfileWhereInput[]
    OR?: MentorProfileWhereInput[]
    NOT?: MentorProfileWhereInput | MentorProfileWhereInput[]
    id?: StringFilter<"MentorProfile"> | string
    expertise?: StringFilter<"MentorProfile"> | string
    experience?: StringFilter<"MentorProfile"> | string
    availability?: StringFilter<"MentorProfile"> | string
    userId?: StringFilter<"MentorProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Collab?: CollabListRelationFilter
  }

  export type MentorProfileOrderByWithRelationInput = {
    id?: SortOrder
    expertise?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    Collab?: CollabOrderByRelationAggregateInput
  }

  export type MentorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MentorProfileWhereInput | MentorProfileWhereInput[]
    OR?: MentorProfileWhereInput[]
    NOT?: MentorProfileWhereInput | MentorProfileWhereInput[]
    expertise?: StringFilter<"MentorProfile"> | string
    experience?: StringFilter<"MentorProfile"> | string
    availability?: StringFilter<"MentorProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Collab?: CollabListRelationFilter
  }, "id" | "userId">

  export type MentorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    expertise?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    userId?: SortOrder
    _count?: MentorProfileCountOrderByAggregateInput
    _max?: MentorProfileMaxOrderByAggregateInput
    _min?: MentorProfileMinOrderByAggregateInput
  }

  export type MentorProfileScalarWhereWithAggregatesInput = {
    AND?: MentorProfileScalarWhereWithAggregatesInput | MentorProfileScalarWhereWithAggregatesInput[]
    OR?: MentorProfileScalarWhereWithAggregatesInput[]
    NOT?: MentorProfileScalarWhereWithAggregatesInput | MentorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MentorProfile"> | string
    expertise?: StringWithAggregatesFilter<"MentorProfile"> | string
    experience?: StringWithAggregatesFilter<"MentorProfile"> | string
    availability?: StringWithAggregatesFilter<"MentorProfile"> | string
    userId?: StringWithAggregatesFilter<"MentorProfile"> | string
  }

  export type MenteeProfileWhereInput = {
    AND?: MenteeProfileWhereInput | MenteeProfileWhereInput[]
    OR?: MenteeProfileWhereInput[]
    NOT?: MenteeProfileWhereInput | MenteeProfileWhereInput[]
    id?: StringFilter<"MenteeProfile"> | string
    interests?: StringFilter<"MenteeProfile"> | string
    goals?: StringFilter<"MenteeProfile"> | string
    preferredSchedule?: StringFilter<"MenteeProfile"> | string
    userId?: StringFilter<"MenteeProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    CollabTasks?: CollabTasksListRelationFilter
  }

  export type MenteeProfileOrderByWithRelationInput = {
    id?: SortOrder
    interests?: SortOrder
    goals?: SortOrder
    preferredSchedule?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    CollabTasks?: CollabTasksOrderByRelationAggregateInput
  }

  export type MenteeProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MenteeProfileWhereInput | MenteeProfileWhereInput[]
    OR?: MenteeProfileWhereInput[]
    NOT?: MenteeProfileWhereInput | MenteeProfileWhereInput[]
    interests?: StringFilter<"MenteeProfile"> | string
    goals?: StringFilter<"MenteeProfile"> | string
    preferredSchedule?: StringFilter<"MenteeProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    CollabTasks?: CollabTasksListRelationFilter
  }, "id" | "userId">

  export type MenteeProfileOrderByWithAggregationInput = {
    id?: SortOrder
    interests?: SortOrder
    goals?: SortOrder
    preferredSchedule?: SortOrder
    userId?: SortOrder
    _count?: MenteeProfileCountOrderByAggregateInput
    _max?: MenteeProfileMaxOrderByAggregateInput
    _min?: MenteeProfileMinOrderByAggregateInput
  }

  export type MenteeProfileScalarWhereWithAggregatesInput = {
    AND?: MenteeProfileScalarWhereWithAggregatesInput | MenteeProfileScalarWhereWithAggregatesInput[]
    OR?: MenteeProfileScalarWhereWithAggregatesInput[]
    NOT?: MenteeProfileScalarWhereWithAggregatesInput | MenteeProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenteeProfile"> | string
    interests?: StringWithAggregatesFilter<"MenteeProfile"> | string
    goals?: StringWithAggregatesFilter<"MenteeProfile"> | string
    preferredSchedule?: StringWithAggregatesFilter<"MenteeProfile"> | string
    userId?: StringWithAggregatesFilter<"MenteeProfile"> | string
  }

  export type ProjectShowcaseWhereInput = {
    AND?: ProjectShowcaseWhereInput | ProjectShowcaseWhereInput[]
    OR?: ProjectShowcaseWhereInput[]
    NOT?: ProjectShowcaseWhereInput | ProjectShowcaseWhereInput[]
    id?: StringFilter<"ProjectShowcase"> | string
    title?: StringFilter<"ProjectShowcase"> | string
    description?: StringFilter<"ProjectShowcase"> | string
    github_link?: StringFilter<"ProjectShowcase"> | string
    deployed_link?: StringFilter<"ProjectShowcase"> | string
    resource_link?: StringNullableListFilter<"ProjectShowcase">
    images?: StringNullableListFilter<"ProjectShowcase">
    userId?: StringFilter<"ProjectShowcase"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectShowcaseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrder
    deployed_link?: SortOrder
    resource_link?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProjectShowcaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProjectShowcaseWhereInput | ProjectShowcaseWhereInput[]
    OR?: ProjectShowcaseWhereInput[]
    NOT?: ProjectShowcaseWhereInput | ProjectShowcaseWhereInput[]
    title?: StringFilter<"ProjectShowcase"> | string
    description?: StringFilter<"ProjectShowcase"> | string
    github_link?: StringFilter<"ProjectShowcase"> | string
    deployed_link?: StringFilter<"ProjectShowcase"> | string
    resource_link?: StringNullableListFilter<"ProjectShowcase">
    images?: StringNullableListFilter<"ProjectShowcase">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProjectShowcaseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrder
    deployed_link?: SortOrder
    resource_link?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    _count?: ProjectShowcaseCountOrderByAggregateInput
    _max?: ProjectShowcaseMaxOrderByAggregateInput
    _min?: ProjectShowcaseMinOrderByAggregateInput
  }

  export type ProjectShowcaseScalarWhereWithAggregatesInput = {
    AND?: ProjectShowcaseScalarWhereWithAggregatesInput | ProjectShowcaseScalarWhereWithAggregatesInput[]
    OR?: ProjectShowcaseScalarWhereWithAggregatesInput[]
    NOT?: ProjectShowcaseScalarWhereWithAggregatesInput | ProjectShowcaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectShowcase"> | string
    title?: StringWithAggregatesFilter<"ProjectShowcase"> | string
    description?: StringWithAggregatesFilter<"ProjectShowcase"> | string
    github_link?: StringWithAggregatesFilter<"ProjectShowcase"> | string
    deployed_link?: StringWithAggregatesFilter<"ProjectShowcase"> | string
    resource_link?: StringNullableListFilter<"ProjectShowcase">
    images?: StringNullableListFilter<"ProjectShowcase">
    userId?: StringWithAggregatesFilter<"ProjectShowcase"> | string
  }

  export type CollabWhereInput = {
    AND?: CollabWhereInput | CollabWhereInput[]
    OR?: CollabWhereInput[]
    NOT?: CollabWhereInput | CollabWhereInput[]
    id?: StringFilter<"Collab"> | string
    mentorId?: StringFilter<"Collab"> | string
    title?: StringFilter<"Collab"> | string
    description?: StringFilter<"Collab"> | string
    status?: EnumCollabStatusFilter<"Collab"> | $Enums.CollabStatus
    mentor?: XOR<MentorProfileScalarRelationFilter, MentorProfileWhereInput>
    CollabTasks?: CollabTasksListRelationFilter
    CollabSubmission?: CollabSubmissionListRelationFilter
  }

  export type CollabOrderByWithRelationInput = {
    id?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    mentor?: MentorProfileOrderByWithRelationInput
    CollabTasks?: CollabTasksOrderByRelationAggregateInput
    CollabSubmission?: CollabSubmissionOrderByRelationAggregateInput
  }

  export type CollabWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollabWhereInput | CollabWhereInput[]
    OR?: CollabWhereInput[]
    NOT?: CollabWhereInput | CollabWhereInput[]
    mentorId?: StringFilter<"Collab"> | string
    title?: StringFilter<"Collab"> | string
    description?: StringFilter<"Collab"> | string
    status?: EnumCollabStatusFilter<"Collab"> | $Enums.CollabStatus
    mentor?: XOR<MentorProfileScalarRelationFilter, MentorProfileWhereInput>
    CollabTasks?: CollabTasksListRelationFilter
    CollabSubmission?: CollabSubmissionListRelationFilter
  }, "id">

  export type CollabOrderByWithAggregationInput = {
    id?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    _count?: CollabCountOrderByAggregateInput
    _max?: CollabMaxOrderByAggregateInput
    _min?: CollabMinOrderByAggregateInput
  }

  export type CollabScalarWhereWithAggregatesInput = {
    AND?: CollabScalarWhereWithAggregatesInput | CollabScalarWhereWithAggregatesInput[]
    OR?: CollabScalarWhereWithAggregatesInput[]
    NOT?: CollabScalarWhereWithAggregatesInput | CollabScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collab"> | string
    mentorId?: StringWithAggregatesFilter<"Collab"> | string
    title?: StringWithAggregatesFilter<"Collab"> | string
    description?: StringWithAggregatesFilter<"Collab"> | string
    status?: EnumCollabStatusWithAggregatesFilter<"Collab"> | $Enums.CollabStatus
  }

  export type CollabTasksWhereInput = {
    AND?: CollabTasksWhereInput | CollabTasksWhereInput[]
    OR?: CollabTasksWhereInput[]
    NOT?: CollabTasksWhereInput | CollabTasksWhereInput[]
    id?: StringFilter<"CollabTasks"> | string
    title?: StringFilter<"CollabTasks"> | string
    description?: StringFilter<"CollabTasks"> | string
    collabId?: StringFilter<"CollabTasks"> | string
    menteeId?: StringFilter<"CollabTasks"> | string
    status?: EnumCollabStatusFilter<"CollabTasks"> | $Enums.CollabStatus
    collab?: XOR<CollabScalarRelationFilter, CollabWhereInput>
    mentee?: XOR<MenteeProfileScalarRelationFilter, MenteeProfileWhereInput>
  }

  export type CollabTasksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    collabId?: SortOrder
    menteeId?: SortOrder
    status?: SortOrder
    collab?: CollabOrderByWithRelationInput
    mentee?: MenteeProfileOrderByWithRelationInput
  }

  export type CollabTasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollabTasksWhereInput | CollabTasksWhereInput[]
    OR?: CollabTasksWhereInput[]
    NOT?: CollabTasksWhereInput | CollabTasksWhereInput[]
    title?: StringFilter<"CollabTasks"> | string
    description?: StringFilter<"CollabTasks"> | string
    collabId?: StringFilter<"CollabTasks"> | string
    menteeId?: StringFilter<"CollabTasks"> | string
    status?: EnumCollabStatusFilter<"CollabTasks"> | $Enums.CollabStatus
    collab?: XOR<CollabScalarRelationFilter, CollabWhereInput>
    mentee?: XOR<MenteeProfileScalarRelationFilter, MenteeProfileWhereInput>
  }, "id">

  export type CollabTasksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    collabId?: SortOrder
    menteeId?: SortOrder
    status?: SortOrder
    _count?: CollabTasksCountOrderByAggregateInput
    _max?: CollabTasksMaxOrderByAggregateInput
    _min?: CollabTasksMinOrderByAggregateInput
  }

  export type CollabTasksScalarWhereWithAggregatesInput = {
    AND?: CollabTasksScalarWhereWithAggregatesInput | CollabTasksScalarWhereWithAggregatesInput[]
    OR?: CollabTasksScalarWhereWithAggregatesInput[]
    NOT?: CollabTasksScalarWhereWithAggregatesInput | CollabTasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollabTasks"> | string
    title?: StringWithAggregatesFilter<"CollabTasks"> | string
    description?: StringWithAggregatesFilter<"CollabTasks"> | string
    collabId?: StringWithAggregatesFilter<"CollabTasks"> | string
    menteeId?: StringWithAggregatesFilter<"CollabTasks"> | string
    status?: EnumCollabStatusWithAggregatesFilter<"CollabTasks"> | $Enums.CollabStatus
  }

  export type CollabSubmissionWhereInput = {
    AND?: CollabSubmissionWhereInput | CollabSubmissionWhereInput[]
    OR?: CollabSubmissionWhereInput[]
    NOT?: CollabSubmissionWhereInput | CollabSubmissionWhereInput[]
    id?: StringFilter<"CollabSubmission"> | string
    collabId?: StringFilter<"CollabSubmission"> | string
    github_link?: StringFilter<"CollabSubmission"> | string
    resource_link?: StringNullableListFilter<"CollabSubmission">
    collab?: XOR<CollabScalarRelationFilter, CollabWhereInput>
  }

  export type CollabSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    collabId?: SortOrder
    github_link?: SortOrder
    resource_link?: SortOrder
    collab?: CollabOrderByWithRelationInput
  }

  export type CollabSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollabSubmissionWhereInput | CollabSubmissionWhereInput[]
    OR?: CollabSubmissionWhereInput[]
    NOT?: CollabSubmissionWhereInput | CollabSubmissionWhereInput[]
    collabId?: StringFilter<"CollabSubmission"> | string
    github_link?: StringFilter<"CollabSubmission"> | string
    resource_link?: StringNullableListFilter<"CollabSubmission">
    collab?: XOR<CollabScalarRelationFilter, CollabWhereInput>
  }, "id">

  export type CollabSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    collabId?: SortOrder
    github_link?: SortOrder
    resource_link?: SortOrder
    _count?: CollabSubmissionCountOrderByAggregateInput
    _max?: CollabSubmissionMaxOrderByAggregateInput
    _min?: CollabSubmissionMinOrderByAggregateInput
  }

  export type CollabSubmissionScalarWhereWithAggregatesInput = {
    AND?: CollabSubmissionScalarWhereWithAggregatesInput | CollabSubmissionScalarWhereWithAggregatesInput[]
    OR?: CollabSubmissionScalarWhereWithAggregatesInput[]
    NOT?: CollabSubmissionScalarWhereWithAggregatesInput | CollabSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollabSubmission"> | string
    collabId?: StringWithAggregatesFilter<"CollabSubmission"> | string
    github_link?: StringWithAggregatesFilter<"CollabSubmission"> | string
    resource_link?: StringNullableListFilter<"CollabSubmission">
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    ProjectShowcase?: ProjectShowcaseCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    ProjectShowcase?: ProjectShowcaseUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    ProjectShowcase?: ProjectShowcaseUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    ProjectShowcase?: ProjectShowcaseUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorProfileCreateInput = {
    id?: string
    expertise: string
    experience: string
    availability: string
    user: UserCreateNestedOneWithoutMentorProfileInput
    Collab?: CollabCreateNestedManyWithoutMentorInput
  }

  export type MentorProfileUncheckedCreateInput = {
    id?: string
    expertise: string
    experience: string
    availability: string
    userId: string
    Collab?: CollabUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMentorProfileNestedInput
    Collab?: CollabUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    Collab?: CollabUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfileCreateManyInput = {
    id?: string
    expertise: string
    experience: string
    availability: string
    userId: string
  }

  export type MentorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
  }

  export type MentorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MenteeProfileCreateInput = {
    id?: string
    interests: string
    goals: string
    preferredSchedule: string
    user: UserCreateNestedOneWithoutMenteeProfileInput
    CollabTasks?: CollabTasksCreateNestedManyWithoutMenteeInput
  }

  export type MenteeProfileUncheckedCreateInput = {
    id?: string
    interests: string
    goals: string
    preferredSchedule: string
    userId: string
    CollabTasks?: CollabTasksUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    preferredSchedule?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMenteeProfileNestedInput
    CollabTasks?: CollabTasksUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    preferredSchedule?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    CollabTasks?: CollabTasksUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeProfileCreateManyInput = {
    id?: string
    interests: string
    goals: string
    preferredSchedule: string
    userId: string
  }

  export type MenteeProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    preferredSchedule?: StringFieldUpdateOperationsInput | string
  }

  export type MenteeProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    preferredSchedule?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectShowcaseCreateInput = {
    id?: string
    title: string
    description: string
    github_link: string
    deployed_link: string
    resource_link?: ProjectShowcaseCreateresource_linkInput | string[]
    images?: ProjectShowcaseCreateimagesInput | string[]
    user: UserCreateNestedOneWithoutProjectShowcaseInput
  }

  export type ProjectShowcaseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    github_link: string
    deployed_link: string
    resource_link?: ProjectShowcaseCreateresource_linkInput | string[]
    images?: ProjectShowcaseCreateimagesInput | string[]
    userId: string
  }

  export type ProjectShowcaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    deployed_link?: StringFieldUpdateOperationsInput | string
    resource_link?: ProjectShowcaseUpdateresource_linkInput | string[]
    images?: ProjectShowcaseUpdateimagesInput | string[]
    user?: UserUpdateOneRequiredWithoutProjectShowcaseNestedInput
  }

  export type ProjectShowcaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    deployed_link?: StringFieldUpdateOperationsInput | string
    resource_link?: ProjectShowcaseUpdateresource_linkInput | string[]
    images?: ProjectShowcaseUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectShowcaseCreateManyInput = {
    id?: string
    title: string
    description: string
    github_link: string
    deployed_link: string
    resource_link?: ProjectShowcaseCreateresource_linkInput | string[]
    images?: ProjectShowcaseCreateimagesInput | string[]
    userId: string
  }

  export type ProjectShowcaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    deployed_link?: StringFieldUpdateOperationsInput | string
    resource_link?: ProjectShowcaseUpdateresource_linkInput | string[]
    images?: ProjectShowcaseUpdateimagesInput | string[]
  }

  export type ProjectShowcaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    deployed_link?: StringFieldUpdateOperationsInput | string
    resource_link?: ProjectShowcaseUpdateresource_linkInput | string[]
    images?: ProjectShowcaseUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CollabCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
    mentor: MentorProfileCreateNestedOneWithoutCollabInput
    CollabTasks?: CollabTasksCreateNestedManyWithoutCollabInput
    CollabSubmission?: CollabSubmissionCreateNestedManyWithoutCollabInput
  }

  export type CollabUncheckedCreateInput = {
    id?: string
    mentorId: string
    title: string
    description: string
    status: $Enums.CollabStatus
    CollabTasks?: CollabTasksUncheckedCreateNestedManyWithoutCollabInput
    CollabSubmission?: CollabSubmissionUncheckedCreateNestedManyWithoutCollabInput
  }

  export type CollabUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    mentor?: MentorProfileUpdateOneRequiredWithoutCollabNestedInput
    CollabTasks?: CollabTasksUpdateManyWithoutCollabNestedInput
    CollabSubmission?: CollabSubmissionUpdateManyWithoutCollabNestedInput
  }

  export type CollabUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    CollabTasks?: CollabTasksUncheckedUpdateManyWithoutCollabNestedInput
    CollabSubmission?: CollabSubmissionUncheckedUpdateManyWithoutCollabNestedInput
  }

  export type CollabCreateManyInput = {
    id?: string
    mentorId: string
    title: string
    description: string
    status: $Enums.CollabStatus
  }

  export type CollabUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabTasksCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
    collab: CollabCreateNestedOneWithoutCollabTasksInput
    mentee: MenteeProfileCreateNestedOneWithoutCollabTasksInput
  }

  export type CollabTasksUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    collabId: string
    menteeId: string
    status: $Enums.CollabStatus
  }

  export type CollabTasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    collab?: CollabUpdateOneRequiredWithoutCollabTasksNestedInput
    mentee?: MenteeProfileUpdateOneRequiredWithoutCollabTasksNestedInput
  }

  export type CollabTasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    collabId?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabTasksCreateManyInput = {
    id?: string
    title: string
    description: string
    collabId: string
    menteeId: string
    status: $Enums.CollabStatus
  }

  export type CollabTasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabTasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    collabId?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabSubmissionCreateInput = {
    id?: string
    github_link: string
    resource_link?: CollabSubmissionCreateresource_linkInput | string[]
    collab: CollabCreateNestedOneWithoutCollabSubmissionInput
  }

  export type CollabSubmissionUncheckedCreateInput = {
    id?: string
    collabId: string
    github_link: string
    resource_link?: CollabSubmissionCreateresource_linkInput | string[]
  }

  export type CollabSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    resource_link?: CollabSubmissionUpdateresource_linkInput | string[]
    collab?: CollabUpdateOneRequiredWithoutCollabSubmissionNestedInput
  }

  export type CollabSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collabId?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    resource_link?: CollabSubmissionUpdateresource_linkInput | string[]
  }

  export type CollabSubmissionCreateManyInput = {
    id?: string
    collabId: string
    github_link: string
    resource_link?: CollabSubmissionCreateresource_linkInput | string[]
  }

  export type CollabSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    resource_link?: CollabSubmissionUpdateresource_linkInput | string[]
  }

  export type CollabSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    collabId?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    resource_link?: CollabSubmissionUpdateresource_linkInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MentorProfileNullableScalarRelationFilter = {
    is?: MentorProfileWhereInput | null
    isNot?: MentorProfileWhereInput | null
  }

  export type MenteeProfileNullableScalarRelationFilter = {
    is?: MenteeProfileWhereInput | null
    isNot?: MenteeProfileWhereInput | null
  }

  export type ProjectShowcaseNullableScalarRelationFilter = {
    is?: ProjectShowcaseWhereInput | null
    isNot?: ProjectShowcaseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CollabListRelationFilter = {
    every?: CollabWhereInput
    some?: CollabWhereInput
    none?: CollabWhereInput
  }

  export type CollabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    expertise?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    userId?: SortOrder
  }

  export type MentorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    expertise?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    userId?: SortOrder
  }

  export type MentorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    expertise?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    userId?: SortOrder
  }

  export type CollabTasksListRelationFilter = {
    every?: CollabTasksWhereInput
    some?: CollabTasksWhereInput
    none?: CollabTasksWhereInput
  }

  export type CollabTasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenteeProfileCountOrderByAggregateInput = {
    id?: SortOrder
    interests?: SortOrder
    goals?: SortOrder
    preferredSchedule?: SortOrder
    userId?: SortOrder
  }

  export type MenteeProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    interests?: SortOrder
    goals?: SortOrder
    preferredSchedule?: SortOrder
    userId?: SortOrder
  }

  export type MenteeProfileMinOrderByAggregateInput = {
    id?: SortOrder
    interests?: SortOrder
    goals?: SortOrder
    preferredSchedule?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProjectShowcaseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrder
    deployed_link?: SortOrder
    resource_link?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type ProjectShowcaseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrder
    deployed_link?: SortOrder
    userId?: SortOrder
  }

  export type ProjectShowcaseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrder
    deployed_link?: SortOrder
    userId?: SortOrder
  }

  export type EnumCollabStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollabStatus | EnumCollabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollabStatus[] | ListEnumCollabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollabStatus[] | ListEnumCollabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollabStatusFilter<$PrismaModel> | $Enums.CollabStatus
  }

  export type MentorProfileScalarRelationFilter = {
    is?: MentorProfileWhereInput
    isNot?: MentorProfileWhereInput
  }

  export type CollabSubmissionListRelationFilter = {
    every?: CollabSubmissionWhereInput
    some?: CollabSubmissionWhereInput
    none?: CollabSubmissionWhereInput
  }

  export type CollabSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollabCountOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type CollabMaxOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type CollabMinOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type EnumCollabStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollabStatus | EnumCollabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollabStatus[] | ListEnumCollabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollabStatus[] | ListEnumCollabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollabStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollabStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollabStatusFilter<$PrismaModel>
    _max?: NestedEnumCollabStatusFilter<$PrismaModel>
  }

  export type CollabScalarRelationFilter = {
    is?: CollabWhereInput
    isNot?: CollabWhereInput
  }

  export type MenteeProfileScalarRelationFilter = {
    is?: MenteeProfileWhereInput
    isNot?: MenteeProfileWhereInput
  }

  export type CollabTasksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    collabId?: SortOrder
    menteeId?: SortOrder
    status?: SortOrder
  }

  export type CollabTasksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    collabId?: SortOrder
    menteeId?: SortOrder
    status?: SortOrder
  }

  export type CollabTasksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    collabId?: SortOrder
    menteeId?: SortOrder
    status?: SortOrder
  }

  export type CollabSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    collabId?: SortOrder
    github_link?: SortOrder
    resource_link?: SortOrder
  }

  export type CollabSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    collabId?: SortOrder
    github_link?: SortOrder
  }

  export type CollabSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    collabId?: SortOrder
    github_link?: SortOrder
  }

  export type MentorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    connect?: MentorProfileWhereUniqueInput
  }

  export type MenteeProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutUserInput
    connect?: MenteeProfileWhereUniqueInput
  }

  export type ProjectShowcaseCreateNestedOneWithoutUserInput = {
    create?: XOR<ProjectShowcaseCreateWithoutUserInput, ProjectShowcaseUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProjectShowcaseCreateOrConnectWithoutUserInput
    connect?: ProjectShowcaseWhereUniqueInput
  }

  export type MentorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    connect?: MentorProfileWhereUniqueInput
  }

  export type MenteeProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutUserInput
    connect?: MenteeProfileWhereUniqueInput
  }

  export type ProjectShowcaseUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProjectShowcaseCreateWithoutUserInput, ProjectShowcaseUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProjectShowcaseCreateOrConnectWithoutUserInput
    connect?: ProjectShowcaseWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MentorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    upsert?: MentorProfileUpsertWithoutUserInput
    disconnect?: MentorProfileWhereInput | boolean
    delete?: MentorProfileWhereInput | boolean
    connect?: MentorProfileWhereUniqueInput
    update?: XOR<XOR<MentorProfileUpdateToOneWithWhereWithoutUserInput, MentorProfileUpdateWithoutUserInput>, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MenteeProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutUserInput
    upsert?: MenteeProfileUpsertWithoutUserInput
    disconnect?: MenteeProfileWhereInput | boolean
    delete?: MenteeProfileWhereInput | boolean
    connect?: MenteeProfileWhereUniqueInput
    update?: XOR<XOR<MenteeProfileUpdateToOneWithWhereWithoutUserInput, MenteeProfileUpdateWithoutUserInput>, MenteeProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProjectShowcaseUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProjectShowcaseCreateWithoutUserInput, ProjectShowcaseUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProjectShowcaseCreateOrConnectWithoutUserInput
    upsert?: ProjectShowcaseUpsertWithoutUserInput
    disconnect?: ProjectShowcaseWhereInput | boolean
    delete?: ProjectShowcaseWhereInput | boolean
    connect?: ProjectShowcaseWhereUniqueInput
    update?: XOR<XOR<ProjectShowcaseUpdateToOneWithWhereWithoutUserInput, ProjectShowcaseUpdateWithoutUserInput>, ProjectShowcaseUncheckedUpdateWithoutUserInput>
  }

  export type MentorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    upsert?: MentorProfileUpsertWithoutUserInput
    disconnect?: MentorProfileWhereInput | boolean
    delete?: MentorProfileWhereInput | boolean
    connect?: MentorProfileWhereUniqueInput
    update?: XOR<XOR<MentorProfileUpdateToOneWithWhereWithoutUserInput, MentorProfileUpdateWithoutUserInput>, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MenteeProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutUserInput
    upsert?: MenteeProfileUpsertWithoutUserInput
    disconnect?: MenteeProfileWhereInput | boolean
    delete?: MenteeProfileWhereInput | boolean
    connect?: MenteeProfileWhereUniqueInput
    update?: XOR<XOR<MenteeProfileUpdateToOneWithWhereWithoutUserInput, MenteeProfileUpdateWithoutUserInput>, MenteeProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProjectShowcaseUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProjectShowcaseCreateWithoutUserInput, ProjectShowcaseUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProjectShowcaseCreateOrConnectWithoutUserInput
    upsert?: ProjectShowcaseUpsertWithoutUserInput
    disconnect?: ProjectShowcaseWhereInput | boolean
    delete?: ProjectShowcaseWhereInput | boolean
    connect?: ProjectShowcaseWhereUniqueInput
    update?: XOR<XOR<ProjectShowcaseUpdateToOneWithWhereWithoutUserInput, ProjectShowcaseUpdateWithoutUserInput>, ProjectShowcaseUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutMentorProfileInput = {
    create?: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CollabCreateNestedManyWithoutMentorInput = {
    create?: XOR<CollabCreateWithoutMentorInput, CollabUncheckedCreateWithoutMentorInput> | CollabCreateWithoutMentorInput[] | CollabUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: CollabCreateOrConnectWithoutMentorInput | CollabCreateOrConnectWithoutMentorInput[]
    createMany?: CollabCreateManyMentorInputEnvelope
    connect?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
  }

  export type CollabUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<CollabCreateWithoutMentorInput, CollabUncheckedCreateWithoutMentorInput> | CollabCreateWithoutMentorInput[] | CollabUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: CollabCreateOrConnectWithoutMentorInput | CollabCreateOrConnectWithoutMentorInput[]
    createMany?: CollabCreateManyMentorInputEnvelope
    connect?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMentorProfileNestedInput = {
    create?: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorProfileInput
    upsert?: UserUpsertWithoutMentorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorProfileInput, UserUpdateWithoutMentorProfileInput>, UserUncheckedUpdateWithoutMentorProfileInput>
  }

  export type CollabUpdateManyWithoutMentorNestedInput = {
    create?: XOR<CollabCreateWithoutMentorInput, CollabUncheckedCreateWithoutMentorInput> | CollabCreateWithoutMentorInput[] | CollabUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: CollabCreateOrConnectWithoutMentorInput | CollabCreateOrConnectWithoutMentorInput[]
    upsert?: CollabUpsertWithWhereUniqueWithoutMentorInput | CollabUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: CollabCreateManyMentorInputEnvelope
    set?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
    disconnect?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
    delete?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
    connect?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
    update?: CollabUpdateWithWhereUniqueWithoutMentorInput | CollabUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: CollabUpdateManyWithWhereWithoutMentorInput | CollabUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: CollabScalarWhereInput | CollabScalarWhereInput[]
  }

  export type CollabUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<CollabCreateWithoutMentorInput, CollabUncheckedCreateWithoutMentorInput> | CollabCreateWithoutMentorInput[] | CollabUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: CollabCreateOrConnectWithoutMentorInput | CollabCreateOrConnectWithoutMentorInput[]
    upsert?: CollabUpsertWithWhereUniqueWithoutMentorInput | CollabUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: CollabCreateManyMentorInputEnvelope
    set?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
    disconnect?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
    delete?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
    connect?: CollabWhereUniqueInput | CollabWhereUniqueInput[]
    update?: CollabUpdateWithWhereUniqueWithoutMentorInput | CollabUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: CollabUpdateManyWithWhereWithoutMentorInput | CollabUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: CollabScalarWhereInput | CollabScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMenteeProfileInput = {
    create?: XOR<UserCreateWithoutMenteeProfileInput, UserUncheckedCreateWithoutMenteeProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenteeProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CollabTasksCreateNestedManyWithoutMenteeInput = {
    create?: XOR<CollabTasksCreateWithoutMenteeInput, CollabTasksUncheckedCreateWithoutMenteeInput> | CollabTasksCreateWithoutMenteeInput[] | CollabTasksUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: CollabTasksCreateOrConnectWithoutMenteeInput | CollabTasksCreateOrConnectWithoutMenteeInput[]
    createMany?: CollabTasksCreateManyMenteeInputEnvelope
    connect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
  }

  export type CollabTasksUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<CollabTasksCreateWithoutMenteeInput, CollabTasksUncheckedCreateWithoutMenteeInput> | CollabTasksCreateWithoutMenteeInput[] | CollabTasksUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: CollabTasksCreateOrConnectWithoutMenteeInput | CollabTasksCreateOrConnectWithoutMenteeInput[]
    createMany?: CollabTasksCreateManyMenteeInputEnvelope
    connect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMenteeProfileNestedInput = {
    create?: XOR<UserCreateWithoutMenteeProfileInput, UserUncheckedCreateWithoutMenteeProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenteeProfileInput
    upsert?: UserUpsertWithoutMenteeProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMenteeProfileInput, UserUpdateWithoutMenteeProfileInput>, UserUncheckedUpdateWithoutMenteeProfileInput>
  }

  export type CollabTasksUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<CollabTasksCreateWithoutMenteeInput, CollabTasksUncheckedCreateWithoutMenteeInput> | CollabTasksCreateWithoutMenteeInput[] | CollabTasksUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: CollabTasksCreateOrConnectWithoutMenteeInput | CollabTasksCreateOrConnectWithoutMenteeInput[]
    upsert?: CollabTasksUpsertWithWhereUniqueWithoutMenteeInput | CollabTasksUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: CollabTasksCreateManyMenteeInputEnvelope
    set?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    disconnect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    delete?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    connect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    update?: CollabTasksUpdateWithWhereUniqueWithoutMenteeInput | CollabTasksUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: CollabTasksUpdateManyWithWhereWithoutMenteeInput | CollabTasksUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: CollabTasksScalarWhereInput | CollabTasksScalarWhereInput[]
  }

  export type CollabTasksUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<CollabTasksCreateWithoutMenteeInput, CollabTasksUncheckedCreateWithoutMenteeInput> | CollabTasksCreateWithoutMenteeInput[] | CollabTasksUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: CollabTasksCreateOrConnectWithoutMenteeInput | CollabTasksCreateOrConnectWithoutMenteeInput[]
    upsert?: CollabTasksUpsertWithWhereUniqueWithoutMenteeInput | CollabTasksUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: CollabTasksCreateManyMenteeInputEnvelope
    set?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    disconnect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    delete?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    connect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    update?: CollabTasksUpdateWithWhereUniqueWithoutMenteeInput | CollabTasksUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: CollabTasksUpdateManyWithWhereWithoutMenteeInput | CollabTasksUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: CollabTasksScalarWhereInput | CollabTasksScalarWhereInput[]
  }

  export type ProjectShowcaseCreateresource_linkInput = {
    set: string[]
  }

  export type ProjectShowcaseCreateimagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProjectShowcaseInput = {
    create?: XOR<UserCreateWithoutProjectShowcaseInput, UserUncheckedCreateWithoutProjectShowcaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectShowcaseInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectShowcaseUpdateresource_linkInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectShowcaseUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProjectShowcaseNestedInput = {
    create?: XOR<UserCreateWithoutProjectShowcaseInput, UserUncheckedCreateWithoutProjectShowcaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectShowcaseInput
    upsert?: UserUpsertWithoutProjectShowcaseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectShowcaseInput, UserUpdateWithoutProjectShowcaseInput>, UserUncheckedUpdateWithoutProjectShowcaseInput>
  }

  export type MentorProfileCreateNestedOneWithoutCollabInput = {
    create?: XOR<MentorProfileCreateWithoutCollabInput, MentorProfileUncheckedCreateWithoutCollabInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutCollabInput
    connect?: MentorProfileWhereUniqueInput
  }

  export type CollabTasksCreateNestedManyWithoutCollabInput = {
    create?: XOR<CollabTasksCreateWithoutCollabInput, CollabTasksUncheckedCreateWithoutCollabInput> | CollabTasksCreateWithoutCollabInput[] | CollabTasksUncheckedCreateWithoutCollabInput[]
    connectOrCreate?: CollabTasksCreateOrConnectWithoutCollabInput | CollabTasksCreateOrConnectWithoutCollabInput[]
    createMany?: CollabTasksCreateManyCollabInputEnvelope
    connect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
  }

  export type CollabSubmissionCreateNestedManyWithoutCollabInput = {
    create?: XOR<CollabSubmissionCreateWithoutCollabInput, CollabSubmissionUncheckedCreateWithoutCollabInput> | CollabSubmissionCreateWithoutCollabInput[] | CollabSubmissionUncheckedCreateWithoutCollabInput[]
    connectOrCreate?: CollabSubmissionCreateOrConnectWithoutCollabInput | CollabSubmissionCreateOrConnectWithoutCollabInput[]
    createMany?: CollabSubmissionCreateManyCollabInputEnvelope
    connect?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
  }

  export type CollabTasksUncheckedCreateNestedManyWithoutCollabInput = {
    create?: XOR<CollabTasksCreateWithoutCollabInput, CollabTasksUncheckedCreateWithoutCollabInput> | CollabTasksCreateWithoutCollabInput[] | CollabTasksUncheckedCreateWithoutCollabInput[]
    connectOrCreate?: CollabTasksCreateOrConnectWithoutCollabInput | CollabTasksCreateOrConnectWithoutCollabInput[]
    createMany?: CollabTasksCreateManyCollabInputEnvelope
    connect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
  }

  export type CollabSubmissionUncheckedCreateNestedManyWithoutCollabInput = {
    create?: XOR<CollabSubmissionCreateWithoutCollabInput, CollabSubmissionUncheckedCreateWithoutCollabInput> | CollabSubmissionCreateWithoutCollabInput[] | CollabSubmissionUncheckedCreateWithoutCollabInput[]
    connectOrCreate?: CollabSubmissionCreateOrConnectWithoutCollabInput | CollabSubmissionCreateOrConnectWithoutCollabInput[]
    createMany?: CollabSubmissionCreateManyCollabInputEnvelope
    connect?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
  }

  export type EnumCollabStatusFieldUpdateOperationsInput = {
    set?: $Enums.CollabStatus
  }

  export type MentorProfileUpdateOneRequiredWithoutCollabNestedInput = {
    create?: XOR<MentorProfileCreateWithoutCollabInput, MentorProfileUncheckedCreateWithoutCollabInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutCollabInput
    upsert?: MentorProfileUpsertWithoutCollabInput
    connect?: MentorProfileWhereUniqueInput
    update?: XOR<XOR<MentorProfileUpdateToOneWithWhereWithoutCollabInput, MentorProfileUpdateWithoutCollabInput>, MentorProfileUncheckedUpdateWithoutCollabInput>
  }

  export type CollabTasksUpdateManyWithoutCollabNestedInput = {
    create?: XOR<CollabTasksCreateWithoutCollabInput, CollabTasksUncheckedCreateWithoutCollabInput> | CollabTasksCreateWithoutCollabInput[] | CollabTasksUncheckedCreateWithoutCollabInput[]
    connectOrCreate?: CollabTasksCreateOrConnectWithoutCollabInput | CollabTasksCreateOrConnectWithoutCollabInput[]
    upsert?: CollabTasksUpsertWithWhereUniqueWithoutCollabInput | CollabTasksUpsertWithWhereUniqueWithoutCollabInput[]
    createMany?: CollabTasksCreateManyCollabInputEnvelope
    set?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    disconnect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    delete?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    connect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    update?: CollabTasksUpdateWithWhereUniqueWithoutCollabInput | CollabTasksUpdateWithWhereUniqueWithoutCollabInput[]
    updateMany?: CollabTasksUpdateManyWithWhereWithoutCollabInput | CollabTasksUpdateManyWithWhereWithoutCollabInput[]
    deleteMany?: CollabTasksScalarWhereInput | CollabTasksScalarWhereInput[]
  }

  export type CollabSubmissionUpdateManyWithoutCollabNestedInput = {
    create?: XOR<CollabSubmissionCreateWithoutCollabInput, CollabSubmissionUncheckedCreateWithoutCollabInput> | CollabSubmissionCreateWithoutCollabInput[] | CollabSubmissionUncheckedCreateWithoutCollabInput[]
    connectOrCreate?: CollabSubmissionCreateOrConnectWithoutCollabInput | CollabSubmissionCreateOrConnectWithoutCollabInput[]
    upsert?: CollabSubmissionUpsertWithWhereUniqueWithoutCollabInput | CollabSubmissionUpsertWithWhereUniqueWithoutCollabInput[]
    createMany?: CollabSubmissionCreateManyCollabInputEnvelope
    set?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
    disconnect?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
    delete?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
    connect?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
    update?: CollabSubmissionUpdateWithWhereUniqueWithoutCollabInput | CollabSubmissionUpdateWithWhereUniqueWithoutCollabInput[]
    updateMany?: CollabSubmissionUpdateManyWithWhereWithoutCollabInput | CollabSubmissionUpdateManyWithWhereWithoutCollabInput[]
    deleteMany?: CollabSubmissionScalarWhereInput | CollabSubmissionScalarWhereInput[]
  }

  export type CollabTasksUncheckedUpdateManyWithoutCollabNestedInput = {
    create?: XOR<CollabTasksCreateWithoutCollabInput, CollabTasksUncheckedCreateWithoutCollabInput> | CollabTasksCreateWithoutCollabInput[] | CollabTasksUncheckedCreateWithoutCollabInput[]
    connectOrCreate?: CollabTasksCreateOrConnectWithoutCollabInput | CollabTasksCreateOrConnectWithoutCollabInput[]
    upsert?: CollabTasksUpsertWithWhereUniqueWithoutCollabInput | CollabTasksUpsertWithWhereUniqueWithoutCollabInput[]
    createMany?: CollabTasksCreateManyCollabInputEnvelope
    set?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    disconnect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    delete?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    connect?: CollabTasksWhereUniqueInput | CollabTasksWhereUniqueInput[]
    update?: CollabTasksUpdateWithWhereUniqueWithoutCollabInput | CollabTasksUpdateWithWhereUniqueWithoutCollabInput[]
    updateMany?: CollabTasksUpdateManyWithWhereWithoutCollabInput | CollabTasksUpdateManyWithWhereWithoutCollabInput[]
    deleteMany?: CollabTasksScalarWhereInput | CollabTasksScalarWhereInput[]
  }

  export type CollabSubmissionUncheckedUpdateManyWithoutCollabNestedInput = {
    create?: XOR<CollabSubmissionCreateWithoutCollabInput, CollabSubmissionUncheckedCreateWithoutCollabInput> | CollabSubmissionCreateWithoutCollabInput[] | CollabSubmissionUncheckedCreateWithoutCollabInput[]
    connectOrCreate?: CollabSubmissionCreateOrConnectWithoutCollabInput | CollabSubmissionCreateOrConnectWithoutCollabInput[]
    upsert?: CollabSubmissionUpsertWithWhereUniqueWithoutCollabInput | CollabSubmissionUpsertWithWhereUniqueWithoutCollabInput[]
    createMany?: CollabSubmissionCreateManyCollabInputEnvelope
    set?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
    disconnect?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
    delete?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
    connect?: CollabSubmissionWhereUniqueInput | CollabSubmissionWhereUniqueInput[]
    update?: CollabSubmissionUpdateWithWhereUniqueWithoutCollabInput | CollabSubmissionUpdateWithWhereUniqueWithoutCollabInput[]
    updateMany?: CollabSubmissionUpdateManyWithWhereWithoutCollabInput | CollabSubmissionUpdateManyWithWhereWithoutCollabInput[]
    deleteMany?: CollabSubmissionScalarWhereInput | CollabSubmissionScalarWhereInput[]
  }

  export type CollabCreateNestedOneWithoutCollabTasksInput = {
    create?: XOR<CollabCreateWithoutCollabTasksInput, CollabUncheckedCreateWithoutCollabTasksInput>
    connectOrCreate?: CollabCreateOrConnectWithoutCollabTasksInput
    connect?: CollabWhereUniqueInput
  }

  export type MenteeProfileCreateNestedOneWithoutCollabTasksInput = {
    create?: XOR<MenteeProfileCreateWithoutCollabTasksInput, MenteeProfileUncheckedCreateWithoutCollabTasksInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutCollabTasksInput
    connect?: MenteeProfileWhereUniqueInput
  }

  export type CollabUpdateOneRequiredWithoutCollabTasksNestedInput = {
    create?: XOR<CollabCreateWithoutCollabTasksInput, CollabUncheckedCreateWithoutCollabTasksInput>
    connectOrCreate?: CollabCreateOrConnectWithoutCollabTasksInput
    upsert?: CollabUpsertWithoutCollabTasksInput
    connect?: CollabWhereUniqueInput
    update?: XOR<XOR<CollabUpdateToOneWithWhereWithoutCollabTasksInput, CollabUpdateWithoutCollabTasksInput>, CollabUncheckedUpdateWithoutCollabTasksInput>
  }

  export type MenteeProfileUpdateOneRequiredWithoutCollabTasksNestedInput = {
    create?: XOR<MenteeProfileCreateWithoutCollabTasksInput, MenteeProfileUncheckedCreateWithoutCollabTasksInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutCollabTasksInput
    upsert?: MenteeProfileUpsertWithoutCollabTasksInput
    connect?: MenteeProfileWhereUniqueInput
    update?: XOR<XOR<MenteeProfileUpdateToOneWithWhereWithoutCollabTasksInput, MenteeProfileUpdateWithoutCollabTasksInput>, MenteeProfileUncheckedUpdateWithoutCollabTasksInput>
  }

  export type CollabSubmissionCreateresource_linkInput = {
    set: string[]
  }

  export type CollabCreateNestedOneWithoutCollabSubmissionInput = {
    create?: XOR<CollabCreateWithoutCollabSubmissionInput, CollabUncheckedCreateWithoutCollabSubmissionInput>
    connectOrCreate?: CollabCreateOrConnectWithoutCollabSubmissionInput
    connect?: CollabWhereUniqueInput
  }

  export type CollabSubmissionUpdateresource_linkInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CollabUpdateOneRequiredWithoutCollabSubmissionNestedInput = {
    create?: XOR<CollabCreateWithoutCollabSubmissionInput, CollabUncheckedCreateWithoutCollabSubmissionInput>
    connectOrCreate?: CollabCreateOrConnectWithoutCollabSubmissionInput
    upsert?: CollabUpsertWithoutCollabSubmissionInput
    connect?: CollabWhereUniqueInput
    update?: XOR<XOR<CollabUpdateToOneWithWhereWithoutCollabSubmissionInput, CollabUpdateWithoutCollabSubmissionInput>, CollabUncheckedUpdateWithoutCollabSubmissionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCollabStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollabStatus | EnumCollabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollabStatus[] | ListEnumCollabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollabStatus[] | ListEnumCollabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollabStatusFilter<$PrismaModel> | $Enums.CollabStatus
  }

  export type NestedEnumCollabStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollabStatus | EnumCollabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollabStatus[] | ListEnumCollabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollabStatus[] | ListEnumCollabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollabStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollabStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollabStatusFilter<$PrismaModel>
    _max?: NestedEnumCollabStatusFilter<$PrismaModel>
  }

  export type MentorProfileCreateWithoutUserInput = {
    id?: string
    expertise: string
    experience: string
    availability: string
    Collab?: CollabCreateNestedManyWithoutMentorInput
  }

  export type MentorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    expertise: string
    experience: string
    availability: string
    Collab?: CollabUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorProfileCreateOrConnectWithoutUserInput = {
    where: MentorProfileWhereUniqueInput
    create: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
  }

  export type MenteeProfileCreateWithoutUserInput = {
    id?: string
    interests: string
    goals: string
    preferredSchedule: string
    CollabTasks?: CollabTasksCreateNestedManyWithoutMenteeInput
  }

  export type MenteeProfileUncheckedCreateWithoutUserInput = {
    id?: string
    interests: string
    goals: string
    preferredSchedule: string
    CollabTasks?: CollabTasksUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeProfileCreateOrConnectWithoutUserInput = {
    where: MenteeProfileWhereUniqueInput
    create: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
  }

  export type ProjectShowcaseCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    github_link: string
    deployed_link: string
    resource_link?: ProjectShowcaseCreateresource_linkInput | string[]
    images?: ProjectShowcaseCreateimagesInput | string[]
  }

  export type ProjectShowcaseUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    github_link: string
    deployed_link: string
    resource_link?: ProjectShowcaseCreateresource_linkInput | string[]
    images?: ProjectShowcaseCreateimagesInput | string[]
  }

  export type ProjectShowcaseCreateOrConnectWithoutUserInput = {
    where: ProjectShowcaseWhereUniqueInput
    create: XOR<ProjectShowcaseCreateWithoutUserInput, ProjectShowcaseUncheckedCreateWithoutUserInput>
  }

  export type MentorProfileUpsertWithoutUserInput = {
    update: XOR<MentorProfileUpdateWithoutUserInput, MentorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    where?: MentorProfileWhereInput
  }

  export type MentorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MentorProfileWhereInput
    data: XOR<MentorProfileUpdateWithoutUserInput, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MentorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    Collab?: CollabUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    Collab?: CollabUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MenteeProfileUpsertWithoutUserInput = {
    update: XOR<MenteeProfileUpdateWithoutUserInput, MenteeProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    where?: MenteeProfileWhereInput
  }

  export type MenteeProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MenteeProfileWhereInput
    data: XOR<MenteeProfileUpdateWithoutUserInput, MenteeProfileUncheckedUpdateWithoutUserInput>
  }

  export type MenteeProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    preferredSchedule?: StringFieldUpdateOperationsInput | string
    CollabTasks?: CollabTasksUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    preferredSchedule?: StringFieldUpdateOperationsInput | string
    CollabTasks?: CollabTasksUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type ProjectShowcaseUpsertWithoutUserInput = {
    update: XOR<ProjectShowcaseUpdateWithoutUserInput, ProjectShowcaseUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectShowcaseCreateWithoutUserInput, ProjectShowcaseUncheckedCreateWithoutUserInput>
    where?: ProjectShowcaseWhereInput
  }

  export type ProjectShowcaseUpdateToOneWithWhereWithoutUserInput = {
    where?: ProjectShowcaseWhereInput
    data: XOR<ProjectShowcaseUpdateWithoutUserInput, ProjectShowcaseUncheckedUpdateWithoutUserInput>
  }

  export type ProjectShowcaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    deployed_link?: StringFieldUpdateOperationsInput | string
    resource_link?: ProjectShowcaseUpdateresource_linkInput | string[]
    images?: ProjectShowcaseUpdateimagesInput | string[]
  }

  export type ProjectShowcaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    deployed_link?: StringFieldUpdateOperationsInput | string
    resource_link?: ProjectShowcaseUpdateresource_linkInput | string[]
    images?: ProjectShowcaseUpdateimagesInput | string[]
  }

  export type UserCreateWithoutMentorProfileInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    ProjectShowcase?: ProjectShowcaseCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMentorProfileInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    ProjectShowcase?: ProjectShowcaseUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMentorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
  }

  export type CollabCreateWithoutMentorInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
    CollabTasks?: CollabTasksCreateNestedManyWithoutCollabInput
    CollabSubmission?: CollabSubmissionCreateNestedManyWithoutCollabInput
  }

  export type CollabUncheckedCreateWithoutMentorInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
    CollabTasks?: CollabTasksUncheckedCreateNestedManyWithoutCollabInput
    CollabSubmission?: CollabSubmissionUncheckedCreateNestedManyWithoutCollabInput
  }

  export type CollabCreateOrConnectWithoutMentorInput = {
    where: CollabWhereUniqueInput
    create: XOR<CollabCreateWithoutMentorInput, CollabUncheckedCreateWithoutMentorInput>
  }

  export type CollabCreateManyMentorInputEnvelope = {
    data: CollabCreateManyMentorInput | CollabCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMentorProfileInput = {
    update: XOR<UserUpdateWithoutMentorProfileInput, UserUncheckedUpdateWithoutMentorProfileInput>
    create: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorProfileInput, UserUncheckedUpdateWithoutMentorProfileInput>
  }

  export type UserUpdateWithoutMentorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    ProjectShowcase?: ProjectShowcaseUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    ProjectShowcase?: ProjectShowcaseUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CollabUpsertWithWhereUniqueWithoutMentorInput = {
    where: CollabWhereUniqueInput
    update: XOR<CollabUpdateWithoutMentorInput, CollabUncheckedUpdateWithoutMentorInput>
    create: XOR<CollabCreateWithoutMentorInput, CollabUncheckedCreateWithoutMentorInput>
  }

  export type CollabUpdateWithWhereUniqueWithoutMentorInput = {
    where: CollabWhereUniqueInput
    data: XOR<CollabUpdateWithoutMentorInput, CollabUncheckedUpdateWithoutMentorInput>
  }

  export type CollabUpdateManyWithWhereWithoutMentorInput = {
    where: CollabScalarWhereInput
    data: XOR<CollabUpdateManyMutationInput, CollabUncheckedUpdateManyWithoutMentorInput>
  }

  export type CollabScalarWhereInput = {
    AND?: CollabScalarWhereInput | CollabScalarWhereInput[]
    OR?: CollabScalarWhereInput[]
    NOT?: CollabScalarWhereInput | CollabScalarWhereInput[]
    id?: StringFilter<"Collab"> | string
    mentorId?: StringFilter<"Collab"> | string
    title?: StringFilter<"Collab"> | string
    description?: StringFilter<"Collab"> | string
    status?: EnumCollabStatusFilter<"Collab"> | $Enums.CollabStatus
  }

  export type UserCreateWithoutMenteeProfileInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    ProjectShowcase?: ProjectShowcaseCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMenteeProfileInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    ProjectShowcase?: ProjectShowcaseUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMenteeProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMenteeProfileInput, UserUncheckedCreateWithoutMenteeProfileInput>
  }

  export type CollabTasksCreateWithoutMenteeInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
    collab: CollabCreateNestedOneWithoutCollabTasksInput
  }

  export type CollabTasksUncheckedCreateWithoutMenteeInput = {
    id?: string
    title: string
    description: string
    collabId: string
    status: $Enums.CollabStatus
  }

  export type CollabTasksCreateOrConnectWithoutMenteeInput = {
    where: CollabTasksWhereUniqueInput
    create: XOR<CollabTasksCreateWithoutMenteeInput, CollabTasksUncheckedCreateWithoutMenteeInput>
  }

  export type CollabTasksCreateManyMenteeInputEnvelope = {
    data: CollabTasksCreateManyMenteeInput | CollabTasksCreateManyMenteeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMenteeProfileInput = {
    update: XOR<UserUpdateWithoutMenteeProfileInput, UserUncheckedUpdateWithoutMenteeProfileInput>
    create: XOR<UserCreateWithoutMenteeProfileInput, UserUncheckedCreateWithoutMenteeProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMenteeProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMenteeProfileInput, UserUncheckedUpdateWithoutMenteeProfileInput>
  }

  export type UserUpdateWithoutMenteeProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    ProjectShowcase?: ProjectShowcaseUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMenteeProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    ProjectShowcase?: ProjectShowcaseUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CollabTasksUpsertWithWhereUniqueWithoutMenteeInput = {
    where: CollabTasksWhereUniqueInput
    update: XOR<CollabTasksUpdateWithoutMenteeInput, CollabTasksUncheckedUpdateWithoutMenteeInput>
    create: XOR<CollabTasksCreateWithoutMenteeInput, CollabTasksUncheckedCreateWithoutMenteeInput>
  }

  export type CollabTasksUpdateWithWhereUniqueWithoutMenteeInput = {
    where: CollabTasksWhereUniqueInput
    data: XOR<CollabTasksUpdateWithoutMenteeInput, CollabTasksUncheckedUpdateWithoutMenteeInput>
  }

  export type CollabTasksUpdateManyWithWhereWithoutMenteeInput = {
    where: CollabTasksScalarWhereInput
    data: XOR<CollabTasksUpdateManyMutationInput, CollabTasksUncheckedUpdateManyWithoutMenteeInput>
  }

  export type CollabTasksScalarWhereInput = {
    AND?: CollabTasksScalarWhereInput | CollabTasksScalarWhereInput[]
    OR?: CollabTasksScalarWhereInput[]
    NOT?: CollabTasksScalarWhereInput | CollabTasksScalarWhereInput[]
    id?: StringFilter<"CollabTasks"> | string
    title?: StringFilter<"CollabTasks"> | string
    description?: StringFilter<"CollabTasks"> | string
    collabId?: StringFilter<"CollabTasks"> | string
    menteeId?: StringFilter<"CollabTasks"> | string
    status?: EnumCollabStatusFilter<"CollabTasks"> | $Enums.CollabStatus
  }

  export type UserCreateWithoutProjectShowcaseInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectShowcaseInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: string
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectShowcaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectShowcaseInput, UserUncheckedCreateWithoutProjectShowcaseInput>
  }

  export type UserUpsertWithoutProjectShowcaseInput = {
    update: XOR<UserUpdateWithoutProjectShowcaseInput, UserUncheckedUpdateWithoutProjectShowcaseInput>
    create: XOR<UserCreateWithoutProjectShowcaseInput, UserUncheckedCreateWithoutProjectShowcaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectShowcaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectShowcaseInput, UserUncheckedUpdateWithoutProjectShowcaseInput>
  }

  export type UserUpdateWithoutProjectShowcaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectShowcaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MentorProfileCreateWithoutCollabInput = {
    id?: string
    expertise: string
    experience: string
    availability: string
    user: UserCreateNestedOneWithoutMentorProfileInput
  }

  export type MentorProfileUncheckedCreateWithoutCollabInput = {
    id?: string
    expertise: string
    experience: string
    availability: string
    userId: string
  }

  export type MentorProfileCreateOrConnectWithoutCollabInput = {
    where: MentorProfileWhereUniqueInput
    create: XOR<MentorProfileCreateWithoutCollabInput, MentorProfileUncheckedCreateWithoutCollabInput>
  }

  export type CollabTasksCreateWithoutCollabInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
    mentee: MenteeProfileCreateNestedOneWithoutCollabTasksInput
  }

  export type CollabTasksUncheckedCreateWithoutCollabInput = {
    id?: string
    title: string
    description: string
    menteeId: string
    status: $Enums.CollabStatus
  }

  export type CollabTasksCreateOrConnectWithoutCollabInput = {
    where: CollabTasksWhereUniqueInput
    create: XOR<CollabTasksCreateWithoutCollabInput, CollabTasksUncheckedCreateWithoutCollabInput>
  }

  export type CollabTasksCreateManyCollabInputEnvelope = {
    data: CollabTasksCreateManyCollabInput | CollabTasksCreateManyCollabInput[]
    skipDuplicates?: boolean
  }

  export type CollabSubmissionCreateWithoutCollabInput = {
    id?: string
    github_link: string
    resource_link?: CollabSubmissionCreateresource_linkInput | string[]
  }

  export type CollabSubmissionUncheckedCreateWithoutCollabInput = {
    id?: string
    github_link: string
    resource_link?: CollabSubmissionCreateresource_linkInput | string[]
  }

  export type CollabSubmissionCreateOrConnectWithoutCollabInput = {
    where: CollabSubmissionWhereUniqueInput
    create: XOR<CollabSubmissionCreateWithoutCollabInput, CollabSubmissionUncheckedCreateWithoutCollabInput>
  }

  export type CollabSubmissionCreateManyCollabInputEnvelope = {
    data: CollabSubmissionCreateManyCollabInput | CollabSubmissionCreateManyCollabInput[]
    skipDuplicates?: boolean
  }

  export type MentorProfileUpsertWithoutCollabInput = {
    update: XOR<MentorProfileUpdateWithoutCollabInput, MentorProfileUncheckedUpdateWithoutCollabInput>
    create: XOR<MentorProfileCreateWithoutCollabInput, MentorProfileUncheckedCreateWithoutCollabInput>
    where?: MentorProfileWhereInput
  }

  export type MentorProfileUpdateToOneWithWhereWithoutCollabInput = {
    where?: MentorProfileWhereInput
    data: XOR<MentorProfileUpdateWithoutCollabInput, MentorProfileUncheckedUpdateWithoutCollabInput>
  }

  export type MentorProfileUpdateWithoutCollabInput = {
    id?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMentorProfileNestedInput
  }

  export type MentorProfileUncheckedUpdateWithoutCollabInput = {
    id?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CollabTasksUpsertWithWhereUniqueWithoutCollabInput = {
    where: CollabTasksWhereUniqueInput
    update: XOR<CollabTasksUpdateWithoutCollabInput, CollabTasksUncheckedUpdateWithoutCollabInput>
    create: XOR<CollabTasksCreateWithoutCollabInput, CollabTasksUncheckedCreateWithoutCollabInput>
  }

  export type CollabTasksUpdateWithWhereUniqueWithoutCollabInput = {
    where: CollabTasksWhereUniqueInput
    data: XOR<CollabTasksUpdateWithoutCollabInput, CollabTasksUncheckedUpdateWithoutCollabInput>
  }

  export type CollabTasksUpdateManyWithWhereWithoutCollabInput = {
    where: CollabTasksScalarWhereInput
    data: XOR<CollabTasksUpdateManyMutationInput, CollabTasksUncheckedUpdateManyWithoutCollabInput>
  }

  export type CollabSubmissionUpsertWithWhereUniqueWithoutCollabInput = {
    where: CollabSubmissionWhereUniqueInput
    update: XOR<CollabSubmissionUpdateWithoutCollabInput, CollabSubmissionUncheckedUpdateWithoutCollabInput>
    create: XOR<CollabSubmissionCreateWithoutCollabInput, CollabSubmissionUncheckedCreateWithoutCollabInput>
  }

  export type CollabSubmissionUpdateWithWhereUniqueWithoutCollabInput = {
    where: CollabSubmissionWhereUniqueInput
    data: XOR<CollabSubmissionUpdateWithoutCollabInput, CollabSubmissionUncheckedUpdateWithoutCollabInput>
  }

  export type CollabSubmissionUpdateManyWithWhereWithoutCollabInput = {
    where: CollabSubmissionScalarWhereInput
    data: XOR<CollabSubmissionUpdateManyMutationInput, CollabSubmissionUncheckedUpdateManyWithoutCollabInput>
  }

  export type CollabSubmissionScalarWhereInput = {
    AND?: CollabSubmissionScalarWhereInput | CollabSubmissionScalarWhereInput[]
    OR?: CollabSubmissionScalarWhereInput[]
    NOT?: CollabSubmissionScalarWhereInput | CollabSubmissionScalarWhereInput[]
    id?: StringFilter<"CollabSubmission"> | string
    collabId?: StringFilter<"CollabSubmission"> | string
    github_link?: StringFilter<"CollabSubmission"> | string
    resource_link?: StringNullableListFilter<"CollabSubmission">
  }

  export type CollabCreateWithoutCollabTasksInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
    mentor: MentorProfileCreateNestedOneWithoutCollabInput
    CollabSubmission?: CollabSubmissionCreateNestedManyWithoutCollabInput
  }

  export type CollabUncheckedCreateWithoutCollabTasksInput = {
    id?: string
    mentorId: string
    title: string
    description: string
    status: $Enums.CollabStatus
    CollabSubmission?: CollabSubmissionUncheckedCreateNestedManyWithoutCollabInput
  }

  export type CollabCreateOrConnectWithoutCollabTasksInput = {
    where: CollabWhereUniqueInput
    create: XOR<CollabCreateWithoutCollabTasksInput, CollabUncheckedCreateWithoutCollabTasksInput>
  }

  export type MenteeProfileCreateWithoutCollabTasksInput = {
    id?: string
    interests: string
    goals: string
    preferredSchedule: string
    user: UserCreateNestedOneWithoutMenteeProfileInput
  }

  export type MenteeProfileUncheckedCreateWithoutCollabTasksInput = {
    id?: string
    interests: string
    goals: string
    preferredSchedule: string
    userId: string
  }

  export type MenteeProfileCreateOrConnectWithoutCollabTasksInput = {
    where: MenteeProfileWhereUniqueInput
    create: XOR<MenteeProfileCreateWithoutCollabTasksInput, MenteeProfileUncheckedCreateWithoutCollabTasksInput>
  }

  export type CollabUpsertWithoutCollabTasksInput = {
    update: XOR<CollabUpdateWithoutCollabTasksInput, CollabUncheckedUpdateWithoutCollabTasksInput>
    create: XOR<CollabCreateWithoutCollabTasksInput, CollabUncheckedCreateWithoutCollabTasksInput>
    where?: CollabWhereInput
  }

  export type CollabUpdateToOneWithWhereWithoutCollabTasksInput = {
    where?: CollabWhereInput
    data: XOR<CollabUpdateWithoutCollabTasksInput, CollabUncheckedUpdateWithoutCollabTasksInput>
  }

  export type CollabUpdateWithoutCollabTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    mentor?: MentorProfileUpdateOneRequiredWithoutCollabNestedInput
    CollabSubmission?: CollabSubmissionUpdateManyWithoutCollabNestedInput
  }

  export type CollabUncheckedUpdateWithoutCollabTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    CollabSubmission?: CollabSubmissionUncheckedUpdateManyWithoutCollabNestedInput
  }

  export type MenteeProfileUpsertWithoutCollabTasksInput = {
    update: XOR<MenteeProfileUpdateWithoutCollabTasksInput, MenteeProfileUncheckedUpdateWithoutCollabTasksInput>
    create: XOR<MenteeProfileCreateWithoutCollabTasksInput, MenteeProfileUncheckedCreateWithoutCollabTasksInput>
    where?: MenteeProfileWhereInput
  }

  export type MenteeProfileUpdateToOneWithWhereWithoutCollabTasksInput = {
    where?: MenteeProfileWhereInput
    data: XOR<MenteeProfileUpdateWithoutCollabTasksInput, MenteeProfileUncheckedUpdateWithoutCollabTasksInput>
  }

  export type MenteeProfileUpdateWithoutCollabTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    preferredSchedule?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMenteeProfileNestedInput
  }

  export type MenteeProfileUncheckedUpdateWithoutCollabTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    preferredSchedule?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CollabCreateWithoutCollabSubmissionInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
    mentor: MentorProfileCreateNestedOneWithoutCollabInput
    CollabTasks?: CollabTasksCreateNestedManyWithoutCollabInput
  }

  export type CollabUncheckedCreateWithoutCollabSubmissionInput = {
    id?: string
    mentorId: string
    title: string
    description: string
    status: $Enums.CollabStatus
    CollabTasks?: CollabTasksUncheckedCreateNestedManyWithoutCollabInput
  }

  export type CollabCreateOrConnectWithoutCollabSubmissionInput = {
    where: CollabWhereUniqueInput
    create: XOR<CollabCreateWithoutCollabSubmissionInput, CollabUncheckedCreateWithoutCollabSubmissionInput>
  }

  export type CollabUpsertWithoutCollabSubmissionInput = {
    update: XOR<CollabUpdateWithoutCollabSubmissionInput, CollabUncheckedUpdateWithoutCollabSubmissionInput>
    create: XOR<CollabCreateWithoutCollabSubmissionInput, CollabUncheckedCreateWithoutCollabSubmissionInput>
    where?: CollabWhereInput
  }

  export type CollabUpdateToOneWithWhereWithoutCollabSubmissionInput = {
    where?: CollabWhereInput
    data: XOR<CollabUpdateWithoutCollabSubmissionInput, CollabUncheckedUpdateWithoutCollabSubmissionInput>
  }

  export type CollabUpdateWithoutCollabSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    mentor?: MentorProfileUpdateOneRequiredWithoutCollabNestedInput
    CollabTasks?: CollabTasksUpdateManyWithoutCollabNestedInput
  }

  export type CollabUncheckedUpdateWithoutCollabSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    CollabTasks?: CollabTasksUncheckedUpdateManyWithoutCollabNestedInput
  }

  export type CollabCreateManyMentorInput = {
    id?: string
    title: string
    description: string
    status: $Enums.CollabStatus
  }

  export type CollabUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    CollabTasks?: CollabTasksUpdateManyWithoutCollabNestedInput
    CollabSubmission?: CollabSubmissionUpdateManyWithoutCollabNestedInput
  }

  export type CollabUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    CollabTasks?: CollabTasksUncheckedUpdateManyWithoutCollabNestedInput
    CollabSubmission?: CollabSubmissionUncheckedUpdateManyWithoutCollabNestedInput
  }

  export type CollabUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabTasksCreateManyMenteeInput = {
    id?: string
    title: string
    description: string
    collabId: string
    status: $Enums.CollabStatus
  }

  export type CollabTasksUpdateWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    collab?: CollabUpdateOneRequiredWithoutCollabTasksNestedInput
  }

  export type CollabTasksUncheckedUpdateWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    collabId?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabTasksUncheckedUpdateManyWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    collabId?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabTasksCreateManyCollabInput = {
    id?: string
    title: string
    description: string
    menteeId: string
    status: $Enums.CollabStatus
  }

  export type CollabSubmissionCreateManyCollabInput = {
    id?: string
    github_link: string
    resource_link?: CollabSubmissionCreateresource_linkInput | string[]
  }

  export type CollabTasksUpdateWithoutCollabInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
    mentee?: MenteeProfileUpdateOneRequiredWithoutCollabTasksNestedInput
  }

  export type CollabTasksUncheckedUpdateWithoutCollabInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabTasksUncheckedUpdateManyWithoutCollabInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    status?: EnumCollabStatusFieldUpdateOperationsInput | $Enums.CollabStatus
  }

  export type CollabSubmissionUpdateWithoutCollabInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    resource_link?: CollabSubmissionUpdateresource_linkInput | string[]
  }

  export type CollabSubmissionUncheckedUpdateWithoutCollabInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    resource_link?: CollabSubmissionUpdateresource_linkInput | string[]
  }

  export type CollabSubmissionUncheckedUpdateManyWithoutCollabInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_link?: StringFieldUpdateOperationsInput | string
    resource_link?: CollabSubmissionUpdateresource_linkInput | string[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}