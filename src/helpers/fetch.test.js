import React from 'react';
import { fetchHappens } from './fetch.js';

describe('fetchHappens', () => {
  let mockData;

  beforeEach(() => {
    mockData = {
      name: "Jimmy"
    }

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    }));

  });

  it("fetch call takes expected url", () => {
    const url = 'www.exampleSite.com'
    fetchHappens(url);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it.skip("fetch call returns expected data", async () => {
    const url = 'www.exampleSite.com'
    const result = await fetchHappens(url)
    expect(result).toEqual(mockData);
  });

  it("if response not ok show error", async () => {
    const url = 'www.exampleSite.com';
    fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false
    }));
    try {
      await fetchHappens(url)
    } catch (error) {
      expect(error.message).toBe('Response not ok')
    }
  });

})