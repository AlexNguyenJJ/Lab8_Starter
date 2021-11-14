// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('matches valid phone numbers return TRUE', () => {
  expect(functions.isPhoneNumber("(512)815-9890)")).toBe(true);
});

test('matches valid phone numbers return TRUE', () => {
  expect(functions.isPhoneNumber("(550)491-8750)")).toBe(true);
});

test('matches valid phone numbers return FALSE', () => {
  expect(functions.isPhoneNumber("string")).toBe(false);
});

test('matches valid phone numbers return FALSE', () => {
  expect(functions.isPhoneNumber(true)).toBe(false);
});

test('test valid emails return TRUE', () => {
  expect(functions.isEmail("testcase1@gmail.com")).toBe(true);
});

test('test valid emails return TRUE', () => {
  expect(functions.isEmail("pizza@yahoo.com")).toBe(true);
});

test('test valid emails return FALSE', () => {
  expect(functions.isEmail("random word")).toBe(false);
});

test('test valid emails return FALSE', () => {
  expect(functions.isEmail("12951")).toBe(false);
});

test('test strong passwords return TRUE', () => {
  expect(functions.isStrongPassword("spassw0rd")).toBe(true);
});

test('test strong passwords return TRUE', () => {
  expect(functions.isStrongPassword("aboagh13_")).toBe(true);
});

test('test strong passwords return FALSE', () => {
  expect(functions.isStrongPassword("_2302hgns")).toBe(false);
});

test('test strong passwords return FALSE', () => {
  expect(functions.isStrongPassword("REALLYLONGPASSWORD")).toBe(false);
});

test('test valid date return TRUE', () => {
  expect(functions.isDate("12/12/2049")).toBe(true);
});

test('test valid date return TRUE', () => {
  expect(functions.isDate("5/9/1482")).toBe(true);
});

test('test valid date return FALSE', () => {
  expect(functions.isDate("today")).toBe(false);
});

test('test valid date return FALSE', () => {
  expect(functions.isDate("September 9, 999")).toBe(false);
});

test('test valid Hex Color return TRUE', () => {
  expect(functions.isHexColor("ff7799")).toBe(true);
});

test('test valid Hex Color return TRUE', () => {
  expect(functions.isHexColor("f0f")).toBe(true);
});

test('test valid Hex Color return FALSE', () => {
  expect(functions.isHexColor("fffffffff")).toBe(false);
});

test('test valid Hex Color return FALSE', () => {
  expect(functions.isHexColor("blue")).toBe(false);
});