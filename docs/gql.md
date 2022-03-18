##### Introduction

[Welcome](#introduction)

##### Operations

[Queries](#tag-Queries)

*   [getInt](#operation-getint-post)
*   [getInts](#operation-getints-post)
*   [myQuery](#operation-myquery-post)
*   [myTypes](#operation-mytypes-post)
*   [optionalsQuery](#operation-optionalsquery-post)
*   [requiredsQuery](#operation-requiredsquery-post)

[Mutations](#tag-Mutations)

*   [myMutation](#operation-mymutation-post)

##### Types

[Boolean ](#definition-Boolean)[Int ](#definition-Int)[MyType ](#definition-MyType)[String](#definition-String)

# GraphQL API Reference

Welcome to the party!

##### API Endpoints

    Production:
    https://example.com/graphql

Terms of Service: <https://www.example.com/terms>

Contact: <support@example.com>

# Queries

## `getInt`

Returns an [`Int`](#definition-Int)

#### Example

##### Query

```gql
query getInt {
  getInt
}
```

##### Response

```json
{"data": {"getInt": 123}}
```

<!-- <section class="operation-tags row"> -->

<!-- <div class="doc-copy"> -->

[Queries](#tag-Queries)

<!---->

<!-- </div> -->

<!-- </section> -->

## `getInts`

Returns [`[Int]`](#definition-Int)

#### Example

##### Query

```gql
query getInts {
  getInts
}
```

##### Response

```json
{"data": {"getInts": [987]}}
```

<!-- <section class="operation-tags row"> -->

<!-- <div class="doc-copy"> -->

[Queries](#tag-Queries)

<!---->

<!-- </div> -->

<!-- </section> -->

## `myQuery`

This is a description of `myQuery`

Returns a [`String`](#definition-String)

\


<table><tbody><tr><th>Name</th><th>Description</th></tr><tr><td><code>nonReqQueryArg</code> - <a href="#definition-String"><code>String</code></a></td><td>This is a description of a <code>nonRequiredQueryArg</code>. Default = <code>"some default string"</code></td></tr><tr><td><code>reqQueryArg</code> - <a href="#definition-String"><code>String!</code></a></td><td></td></tr><tr><td><code>reqQueryArrayArg</code> - <a href="#definition-String"><code>[String]!</code></a></td><td></td></tr><tr><td><code>dblReqQueryArrayArg</code> - <a href="#definition-String"><code>[String!]!</code></a></td><td></td></tr></tbody></table>

#### Example

##### Query

```gql
query myQuery($nonReqQueryArg: String, $reqQueryArg: String!, $reqQueryArrayArg: [String]!, $dblReqQueryArrayArg: [String!]!) {
  myQuery(nonReqQueryArg: $nonReqQueryArg, reqQueryArg: $reqQueryArg, reqQueryArrayArg: $reqQueryArrayArg, dblReqQueryArrayArg: $dblReqQueryArrayArg)
}
```

##### Variables

```json
{
  "nonReqQueryArg": "Special generated Argument example for myQuery nonReqQueryArg",
  "reqQueryArg": "Special generated Argument example for myQuery reqQueryArg",
  "reqQueryArrayArg": [
    "Special generated Argument example for myQuery reqQueryArrayArg"
  ],
  "dblReqQueryArrayArg": [
    "Special generated Argument example for myQuery dblReqQueryArrayArg"
  ]
}
```

##### Response

```json
{"data": {"myQuery": "abc123"}}
```

<!-- <section class="operation-tags row"> -->

<!-- <div class="doc-copy"> -->

[Queries](#tag-Queries)

<!---->

<!-- </div> -->

<!-- </section> -->

## `myTypes`

Returns [`[MyType]`](#definition-MyType)

#### Example

##### Query

```gql
query myTypes {
  myTypes {
    nonRequiredField(nonRequiredArg: $nonRequiredArg, reqArg: $reqArg, reqArrayArg: $reqArrayArg, dblReqArrayArg: $dblReqArrayArg)
    requiredField
    requiredArrayField
    doubleRequiredArrayField
  }
}
```

##### Response

```json
{
  "data": {
    "myTypes": [
      {
        "nonRequiredField": "xyz789",
        "requiredField": "xyz789",
        "requiredArrayField": ["abc123"],
        "doubleRequiredArrayField": ["abc123"]
      }
    ]
  }
}
```

<!-- <section class="operation-tags row"> -->

<!-- <div class="doc-copy"> -->

[Queries](#tag-Queries)

<!---->

<!-- </div> -->

<!-- </section> -->

## `optionalsQuery`

Returns [`[String]`](#definition-String)

\


<table><tbody><tr><th>Name</th><th>Description</th></tr><tr><td><code>optionalArg</code> - <a href="#definition-String"><code>[String]</code></a></td><td></td></tr></tbody></table>

#### Example

##### Query

```gql
query optionalsQuery($optionalArg: [String]) {
  optionalsQuery(optionalArg: $optionalArg)
}
```

##### Variables

```json
{
  "optionalArg": [
    "Generated Argument example for optionalsQuery optionalArg"
  ]
}
```

##### Response

```json
{"data": {"optionalsQuery": ["xyz789"]}}
```

<!-- <section class="operation-tags row"> -->

<!-- <div class="doc-copy"> -->

[Queries](#tag-Queries)

<!---->

<!-- </div> -->

<!-- </section> -->

## `requiredsQuery`

Returns [`[String!]!`](#definition-String)

\


<table><tbody><tr><th>Name</th><th>Description</th></tr><tr><td><code>dblReqArg</code> - <a href="#definition-String"><code>[String!]!</code></a></td><td></td></tr></tbody></table>

#### Example

##### Query

```gql
query requiredsQuery($dblReqArg: [String!]!) {
  requiredsQuery(dblReqArg: $dblReqArg)
}
```

##### Variables

```json
{
  "dblReqArg": [
    "Generated Argument example for requiredsQuery dblReqArg"
  ]
}
```

##### Response

```json
{"data": {"requiredsQuery": ["abc123"]}}
```

# Mutations

## `myMutation`

Returns a [`String`](#definition-String)

\


<table><tbody><tr><th>Name</th><th>Description</th></tr><tr><td><code>myArg</code> - <a href="#definition-String"><code>String</code></a></td><td></td></tr></tbody></table>

#### Example

##### Query

```gql
mutation myMutation($myArg: String) {
  myMutation(myArg: $myArg)
}
```

##### Variables

```json
{
  "myArg": "Generated Argument example for myMutation myArg"
}
```

##### Response

```json
{"data": {"myMutation": "abc123"}}
```

# Types

## []()`Boolean`

The `Boolean` scalar type represents `true` or `false`.

##### Example

```gql
false
```

[Types](#tag-types)

## []()`Int`

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

##### Example

```gql
123
```

[Types](#tag-types)

## []()`MyType`

This is a description of `MyType`

<table><tbody><tr><th>Name</th><th>Description</th></tr><tr><td data-property-name="nonRequiredField"><code>nonRequiredField</code> - <a href="#definition-String"><code>String</code></a></td><td><p>This is a description of <code>nonRequiredField</code></p></td></tr><tr><td colspan="2" class="no-top-border"><div class="field-arguments"><p class="field-arguments-header">Arguments</p><div class="field-argument"><p class="field-argument-name"><code>nonRequiredArg</code> - <a href="#definition-String"><code>String</code></a> default = <code>"some default string"</code></p><p></p><p>This is a description of a <code>nonRequiredArg</code></p><p></p></div><div class="field-argument"><p class="field-argument-name"><code>reqArg</code> - <a href="#definition-String"><code>String!</code></a></p></div><div class="field-argument"><p class="field-argument-name"><code>reqArrayArg</code> - <a href="#definition-String"><code>[String]!</code></a></p></div><div class="field-argument"><p class="field-argument-name"><code>dblReqArrayArg</code> - <a href="#definition-String"><code>[String!]!</code></a></p></div></div></td></tr><tr><td data-property-name="requiredField"><code>requiredField</code> - <a href="#definition-String"><code>String!</code></a></td><td></td></tr><tr><td data-property-name="requiredArrayField"><code>requiredArrayField</code> - <a href="#definition-String"><code>[String]!</code></a></td><td></td></tr><tr><td data-property-name="doubleRequiredArrayField"><code>doubleRequiredArrayField</code> - <a href="#definition-String"><code>[String!]!</code></a></td><td></td></tr></tbody></table>

##### Example

```json
{
  "nonRequiredField": "Generated Field example for nonRequiredField",
  "requiredField": "Generated Field example for requiredField",
  "requiredArrayField": [
    "Generated Field example for requiredArrayField"
  ],
  "doubleRequiredArrayField": [
    "Generated Field example for doubleRequiredArrayField"
  ]
}
```

[Types](#tag-types)

## []()`String`

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

[Documentation by Anvil SpectaQL](https://github.com/anvilco/spectaql)

