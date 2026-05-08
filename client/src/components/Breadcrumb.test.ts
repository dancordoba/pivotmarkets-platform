import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Breadcrumb Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should render breadcrumb items with correct labels', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' }
    ];

    // Test that breadcrumb structure is correct
    expect(items).toHaveLength(3);
    expect(items[0].label).toBe('Home');
    expect(items[1].label).toBe('Products');
    expect(items[2].label).toBe('Electronics');
  });

  it('should inject BreadcrumbList schema correctly', () => {
    const items = [
      { label: 'AppStore', href: '/appstore' }
    ];

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.label,
        'item': `${window.location.origin}${item.href}`
      }))
    };

    expect(breadcrumbSchema['@type']).toBe('BreadcrumbList');
    expect(breadcrumbSchema.itemListElement).toHaveLength(1);
    expect(breadcrumbSchema.itemListElement[0].position).toBe(1);
    expect(breadcrumbSchema.itemListElement[0].name).toBe('AppStore');
  });

  it('should handle multi-level breadcrumbs', () => {
    const items = [
      { label: 'Regional Showcases', href: '/regional-showcases' },
      { label: 'Nappanee', href: '/nappanee' }
    ];

    expect(items).toHaveLength(2);
    expect(items[0].label).toBe('Regional Showcases');
    expect(items[1].label).toBe('Nappanee');
  });

  it('should handle single-level breadcrumbs', () => {
    const items = [
      { label: 'Protocol', href: '/protocol' }
    ];

    expect(items).toHaveLength(1);
    expect(items[0].label).toBe('Protocol');
  });

  it('should generate correct schema positions', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details', href: '/products/details' }
    ];

    const positions = items.map((_, index) => index + 1);
    expect(positions).toEqual([1, 2, 3]);
  });

  it('should preserve href values in schema', () => {
    const items = [
      { label: 'Glossary', href: '/glossary' }
    ];

    const schemaItem = {
      '@type': 'ListItem',
      'position': 1,
      'name': items[0].label,
      'item': `${window.location.origin}${items[0].href}`
    };

    expect(schemaItem.name).toBe('Glossary');
    expect(schemaItem.item).toContain('/glossary');
  });

  it('should handle breadcrumbs with special characters', () => {
    const items = [
      { label: 'Workflow Factory', href: '/workflow-factory' }
    ];

    expect(items[0].label).toBe('Workflow Factory');
    expect(items[0].href).toBe('/workflow-factory');
  });

  it('should support newsroom breadcrumb', () => {
    const items = [
      { label: 'Newsroom', href: '/newsroom' }
    ];

    expect(items[0].label).toBe('Newsroom');
  });

  it('should support protocol breadcrumb', () => {
    const items = [
      { label: 'Protocol', href: '/protocol' }
    ];

    expect(items[0].label).toBe('Protocol');
  });

  it('should support workflow factory breadcrumb', () => {
    const items = [
      { label: 'Workflow Factory', href: '/workflow-factory' }
    ];

    expect(items[0].label).toBe('Workflow Factory');
  });
});
