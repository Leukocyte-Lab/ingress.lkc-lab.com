import type { IconifyInfo } from '@iconify/types';

export type IconName = IconifyInfo['name'];
export type IconPrefix = 'fa6-brands' | 'fa6-solid' | 'fa6-regular';
export type IconElement = `${IconPrefix}:${IconName}`;

const iconDictionary = {
  directMatch: [
    /windows([\s]?)server|windows|ubuntu|linux|fedora|centos|redhat|suse|freebsd|android/,
    /apple|blackberry|google|intercom|microsoft/,
    /cpanel|docker/,
    /chrome|edge|firefox|safari|opera|internet-explorer/,
    /java|php|node/,
    /unity|laraval|vuejs|react|angular/,
    /amazon|linode|cloudflare/,
    /wordpress|drupal|wix/,
    /jenkins/,
  ],
  pair: {
    apple: /mac|osx|os x|ios|ipados|ipad|xserver/,
    'js-square': /js|javascript/,
    'node-js': /node-js|nodejs|node/,
    'digitial-ocean': /digitial ocean/,
    database: /db|database|sql/,
  },
};

export const matcher = (
  raw: string
): {
  icon: IconElement;
  class?: string;
} => {
  for (const pair of Object.entries(iconDictionary.pair)) {
    const res = raw.toLowerCase().match(pair[1]);

    if (res) {
      return {
        icon: `fa6-brands:${pair[0].split(' ')[0] as IconName}`,
        class: pair[0].split(' ')[1],
      };
    }
  }

  for (const rule of iconDictionary.directMatch) {
    const res = raw.toLowerCase().match(rule);

    if (res) {
      return {
        icon: `fa6-brands:${res[0].split(' ')[0] as IconName}`,
        class: res[0].split(' ')[1],
      };
    }
  }

  return {
    icon: 'fa6-solid:microchip',
  };
};
