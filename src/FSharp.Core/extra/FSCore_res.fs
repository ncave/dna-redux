module internal SR.Resources
open System
open System.Collections.Generic

let resources = new Dictionary<String, String>()
let res_pairs = [|

    ( "matchCasesIncomplete",
        "The match cases were incomplete" );
    ( "addressOpNotFirstClass",
        "First class uses of address-of operators are not permitted." );
    ( "arraysHadDifferentLengths",
        "The arrays have different lengths." );
    ( "arrayWasEmpty",
        "The input array was empty." );
    ( "badFormatString",
        "Input string was not in a correct format." );
    ( "delegateExpected",
        "Expecting delegate type." );
    ( "dyInvDivByIntCoerce",
        "Dynamic invocation of DivideByInt involving coercions is not supported." );
    ( "dyInvOpAddCoerce",
        "Dynamic invocation of op_Addition involving coercions is not supported." );
    ( "dyInvOpAddOverload",
        "Dynamic invocation of op_Addition involving overloading is not supported." );
    ( "dyInvOpMultCoerce",
        "Dynamic invocation of op_Multiply involving coercions is not supported." );
    ( "dyInvOpMultOverload",
        "Dynamic invocation of op_Multiply involving overloading is not supported." );
    ( "endCannotBeNaN",
        "The end of a range cannot be NaN." );
    ( "enumerationAlreadyFinished",
        "Enumeration already finished." );
    ( "enumerationNotStarted",
        "Enumeration has not started. Call MoveNext." );
    ( "setContainsNoElements",
        "Set contains no elements." );
    ( "enumerationPastIntMaxValue",
        "Enumeration based on System.Int32 exceeded System.Int32.MaxValue." );
    ( "failedReadEnoughBytes",
        "Failed to read enough bytes from the stream." );
    ( "genericCompareFail1",
        "Failure during generic comparison: the type '{0}' does not implement the System.IComparable interface. This error may be arise from the use of a function such as 'compare', 'max' or 'min' or a data structure such as 'Set' or 'Map' whose keys contain instances of this type." );
    ( "indexOutOfBounds",
        "The index was outside the range of elements in the list." );
    ( "inputListWasEmpty",
        "The input list was empty." );
    ( "inputMustBeNonNegative",
        "The input must be non-negative." );
    ( "inputMustBePositive",
        "The input must be positive." );
    ( "inputSequenceEmpty",
        "The input sequence was empty." );
    ( "invalidTupleTypes",
        "This is not a valid tuple type for the F# reflection library." );
    ( "keyNotFound",
        "The item, key, or index was not found in the collection." );
    ( "listsHadDifferentLengths",
        "The lists had different lengths." );
    ( "mailboxProcessorAlreadyStarted",
        "The MailboxProcessor has already been started." );
    ( "mailboxProcessorPostAndAsyncReplyTimedOut",
        "MailboxProcessor.PostAndAsyncReply timed out." );
    ( "mailboxProcessorPostAndReplyTimedOut",
        "MailboxProcessor.PostAndReply timed out." );
    ( "mailboxReceiveTimedOut",
        "Mailbox.Receive timed out." );
    ( "mailboxScanTimedOut",
        "Mailbox.Scan timed out." );
    ( "mapCannotBeMutated",
        "Map values cannot be mutated." );
    ( "mismatchIARCancel",
        "The IAsyncResult object provided does not match this 'Cancel' operation." );
    ( "mismatchIAREnd",
        "The IAsyncResult object provided does not match this 'End' operation." );
    ( "noNegateMinValue",
        "Negating the minimum value of a twos complement number is invalid." );
    ( "checkInit",
        "The initialization of an object or value resulted in an object or value being accessed recursively before it was fully initialized." );
    ( "checkStaticInit",
        "The static initialization of a file or type resulted in static data being accessed recursively before it was fully initialized." );
    ( "nonZeroBasedDisallowed",
        "Arrays with non-zero base cannot be created on this platform." );
    ( "notAFunctionType",
        "Type '{0}' is not a function type." );
    ( "notAnExceptionType",
        "Type '{0}' is not the representation of an F# exception declaration." );
    ( "notAPermutation",
        "The function did not compute a permutation." );
    ( "notARecordType",
        "Type '{0}' is not an F# record type." );
    ( "notATupleType",
        "Type '{0}' is not a tuple type." );
    ( "notAUnionType",
        "Type '{0}' is not an F# union type." );
    ( "notComparable",
        "The two objects have different types and are not comparable." );
    ( "notEnoughElements",
        "The input sequence has an insufficient number of elements." );
    ( "notUsedForHashing",
        "This object is for recursive equality calls and cannot be used for hashing." );
    ( "nullsNotAllowedInArray",
        "One of the elements in the array is null." );
    ( "objIsNotARecord",
        "The object is not an F# record value." );
    ( "objIsNullAndNoType",
        "The object is null and no type was given.  Either pass a non-null object or a non-null type parameter." );
    ( "outOfRange",
        "The index is outside the legal range." );
    ( "privateExceptionType",
        "The type '{0}' is the representation of an F# exception declaration but its representation is private. You must specify BindingFlags.NonPublic to access private type representations." );
    ( "privateRecordType",
        "The type '{0}' is an F# record type but its representation is private. You must specify BindingFlags.NonPublic to access private type representations." );
    ( "privateUnionType",
        "The type '{0}' is an F# union type but its representation is private. You must specify BindingFlags.NonPublic to access private type representations." );
    ( "QexpectedOneType",
        "Expected exactly one type argument." );
    ( "QexpectedTwoTypes",
        "Expected exactly two type arguments." );
    ( "QinvalidCaseIndex",
        "Not a valid F# union case index." );
    ( "QmissingRecordField",
        "Type '{0}' did not have an F# record field named '{1}'." );
    ( "QmissingUnionCase",
        "Type '{0}' did not have an F# union case named '{1}'." );
    ( "QtmmBadFieldType",
        "Type mismatch when building '{0}': the type of the field was incorrect. Expected '{1}', but received type '{2}'." );
    ( "QtmmBodyMustBeUnit",
        "Type mismatch when building '{0}': body must return unit. Expected '{1}', but received type '{2}'." );
    ( "QtmmCondMustBeBool",
        "Type mismatch when building '{0}': condition expression must be of type bool. Expected '{1}', but received type '{2}'." );
    ( "QtmmExpectedFunction",
        "Type mismatch when building '{0}': expected function type in function application or let binding. Expected '{1}', but received type '{2}'." );
    ( "QtmmExprNotMatchTuple",
        "Type mismatch when building '{0}': expression doesn't match the tuple type. Expected '{1}', but received type '{2}'." );
    ( "QtmmExprTypeMismatch",
        "Type mismatch when building '{0}': types of expression does not match. Expected '{1}', but received type '{2}'." );
    ( "QtmmFunctionArgTypeMismatch",
        "Type mismatch when building '{0}': function argument type doesn't match. Expected '{1}', but received type '{2}'." );
    ( "QtmmGuardMustBeBool",
        "Type mismatch when building '{0}': guard must return boolean. Expected '{1}', but received type '{2}'." );
    ( "QtmmIncorrectArgForRecord",
        "Type mismatch when building '{0}': incorrect argument type for an F# record. Expected '{1}', but received type '{2}'." );
    ( "QtmmIncorrectArgForUnion",
        "Type mismatch when building '{0}': incorrect argument type for an F# union. Expected '{1}', but received type '{2}'." );
    ( "QtmmInitArray",
        "Type mismatch when building '{0}': initializer doesn't match array type. Expected '{1}', but received type '{2}'." );
    ( "QtmmInvalidParam",
        "Type mismatch when building '{0}': invalid parameter for a method or indexer property. Expected '{1}', but received type '{2}'." );
    ( "QtmmLoopBodyMustBeLambdaTakingInteger",
        "Type mismatch when building '{0}': body of the for loop must be lambda taking integer as an argument. Expected '{1}', but received type '{2}'." );
    ( "QtmmLowerUpperBoundMustBeInt",
        "Type mismatch when building '{0}': lower and upper bounds must be integers. Expected '{1}', but received type '{2}'." );
    ( "QtmmTrueAndFalseMustMatch",
        "Type mismatch when building '{0}': types of true and false branches differ. Expected '{1}', but received type '{2}'." );
    ( "QtmmTuple",
        "Type mismatch when building '{0}': mismatched type of argument and tuple element. Expected '{1}', but received type '{2}'." );
    ( "QtmmVarTypeNotMatchRHS",
        "Type mismatch when building '{0}': the variable type doesn't match the type of the right-hand-side of a let binding. Expected '{1}', but received type '{2}'." );
    ( "QunexpectedHole",
        "Unexpected quotation hole in expression." );
    ( "QunrecognizedMethodCall",
        "The parameter is not a recognized method name." );
    ( "resetNotSupported",
        "Reset is not supported on this enumerator." );
    ( "startCannotBeNaN",
        "The start of a range cannot be NaN." );
    ( "stepCannotBeNaN",
        "The step of a range cannot be NaN." );
    ( "stepCannotBeZero",
        "The step of a range cannot be zero." );
    ( "syncContextNull",
        "The System.Threading.SynchronizationContext.Current of the calling thread is null." );
    ( "tupleIndexOutOfRange",
        "The tuple index '{1}' was out of range for tuple type '{0}'." );
    ( "QfailedToBindConstructor",
        "Failed to bind constructor" );
    ( "QfailedToBindField",
        "Failed to bind field '{0}'" );
    ( "QfailedToBindProperty",
        "Failed to bind property '{0}'" );
    ( "QfailedToBindTypeInAssembly",
        "Failed to bind type '{0}' in assembly '{1}'" );
    ( "QincompatibleRecordLength",
        "Incompatible record length" );
    ( "QincorrectInstanceType",
        "Incorrect instance type" );
    ( "QincorrectNumArgs",
        "Incorrect number of arguments" );
    ( "QincorrectType",
        "Incorrect type" );
    ( "QinvalidFuncType",
        "Invalid function type" );
    ( "QnonStaticNoReceiverObject",
        "The member is non-static (instance), but no receiver object was supplied" );
    ( "QparentCannotBeNull",
        "Parent type cannot be null" );
    ( "QreadingSetOnly",
        "Reading a set-only property" );
    ( "QstaticWithReceiverObject",
        "Receiver object was unexpected, as member is static" );
    ( "QtmmExprHasWrongType",
        "Type mismatch when building '{0}': the expression has the wrong type. Expected '{1}', but received type '{2}'." );
    ( "QtmmFunTypeNotMatchDelegate",
        "Type mismatch when building '{0}': function type doesn't match delegate type. Expected '{1}', but received type '{2}'." );
    ( "QtmmRaw",
        "Type mismatch when splicing expression into quotation literal. The type of the expression tree being inserted doesn't match the type expected by the splicing operation. Expected '{0}', but received type '{1}'. Consider type-annotating with the expected expression type, e.g., (%% x : {0}) or (%x : {0})." );
    ( "QtupleAccessOutOfRange",
        "Tuple access out of range" );
    ( "QtupleLengthsDiffer",
        "The tuple lengths are different" );
    ( "QunionNeedsDiffNumArgs",
        "F# union type requires different number of arguments" );
    ( "QwritingGetOnly",
        "Writing a get-only property" );
    ( "QwrongNumOfTypeArgs",
        "The method '{0}' expects {1} type arguments but {2} were provided" );
    ( "keyNotFoundAlt",
        "An index satisfying the predicate was not found in the collection." );
    ( "constructorForUnionCaseNotFound",
        "The constructor method '{0}' for the union case could not be found" );
    ( "firstClassUsesOfSplice",
        "first class uses of '%' or '%%' are not permitted" );
    ( "moveNextNotCalledOrFinished",
        "MoveNext not called, or finished" );
    ( "multipleCompilationMappings",
        "Multiple CompilationMappingAttributes, expected at most one" );
    ( "printfBadFloatValue",
        "Bad float value" );
    ( "printfBadFormatSpecifier",
        "Bad format specifier:{0}" );
    ( "printfBadIntegerForDynamicFomatter",
        "Bad integer supplied to dynamic formatter" );
    ( "printfExpectedPrecision",
        "Expected a precision argument" );
    ( "printfExpectedWidth",
        "Expected a width argument" );
    ( "printfHashFormatSpecifierIllegal",
        "The # formatting modifier is invalid in F#" );
    ( "printfMissingFormatSpecifier",
        "Missing format specifier" );
    ( "printfNotAFunType",
        "Not a function type" );
    ( "printfPrecisonSpecifierIllegal",
        "Bad format specifier (precision)" );
    ( "printfSpecifierAfterIllegal",
        "Bad format specifier (after {0})" );
    ( "printfWidthSpecifierIllegal",
        "Bad format specifier (width)" );
    ( "QcannotBindFunction",
        "Could not bind function {0} in type {1}" );
    ( "QcannotBindProperty",
        "Could not bind property {0} in type {1}" );
    ( "QcannotBindToMethod",
        "Could not bind to method" );
    ( "QcannotTakeAddress",
        "Cannot take the address of this quotation" );
    ( "QfailedToBindAssembly",
        "Failed to bind assembly '{0}' while processing quotation data" );
    ( "QillFormedAppOrLet",
        "ill formed expression: AppOp or LetOp" );
    ( "QtypeArgumentOutOfRange",
        "type argument out of range" );
    ( "thisValueCannotBeMutated",
        "This value cannot be mutated" );
    ( "optionValueWasNone",
        "The option value was None" );
    ( "controlContinuationInvokedMultipleTimes",
        "A continuation provided by Async.FromContinuations was invoked multiple times" );
    ( "invalidRecordTypeConstructorNotDefined",
        "The record type '{0}' is invalid. Required constructor is not defined." );
    ( "invalidTupleTypeConstructorNotDefined",
        "The tuple type '{0}' is invalid. Required constructor is not defined." );
    ( "inputSequenceTooLong",
        "The input sequence contains more than one element." );
    ( "thenByError",
        "'thenBy' and 'thenByDescending' may only be used with an ordered input" );
    ( "failDueToUnsupportedInputTypeInSumByOrAverageBy",
        "Unrecognized use of a 'sumBy' or 'averageBy' operator in a query. In queries whose original data is of static type IQueryable, these operators may only be used with result type int32, int64, single, double or decimal" );
    ( "unsupportedIfThenElse",
        "An if/then/else conditional or pattern matching expression with multiple branches is not permitted in a query. An if/then/else conditional may be used." );
    ( "unsupportedQueryConstruct",
        "This is not a valid query expression. The following construct was used in a query but is not recognized by the F#-to-LINQ query translator:\n{0}\nCheck the specification of permitted queries and consider moving some of the operations out of the query expression." );
    ( "unsupportedQueryCall",
        "This is not a valid query expression. The method '{0}' was used in a query but is not recognized by the F#-to-LINQ query translator. Check the specification of permitted queries and consider moving some of the operations out of the query expression" );
    ( "unsupportedQueryProperty",
        "This is not a valid query expression. The property '{0}' was used in a query but is not recognized by the F#-to-LINQ query translator. Check the specification of permitted queries and consider moving some of the operations out of the query expression." );
    ( "unsupportedQueryConstructKind",
        "This is not a valid query expression. The construct '{0}' was used in a query but is not recognized by the F#-to-LINQ query translator. Check the specification of permitted queries and consider moving some of the operations out of the query expression." );
|]